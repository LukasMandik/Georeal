from django.shortcuts import render
# from django.views.decorators.cache import cache_page
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.db.models import Count
from tracking.models import Visitor
import geoip2.database

# Create your views here.
# @cache_page(60 * 15) 
def home(request):
    return render(request, 'home.html')

def cookies(request):

    return render(request, 'cookies.html')
# def pricing(request):
#     return render(request, 'pricing.html')

# def is_admin(user):
#     return user.is_authenticated and user.is_staff
 
 
# @login_required
# @user_passes_test(is_admin)
# def silk_view(request):
#     return redirect('/silk/')
from django.utils import timezone
from datetime import timedelta

def get_city_from_ip(ip_address):
    reader = geoip2.database.Reader('static/GeoLite2-City.mmdb')
    try:
        response = reader.city(ip_address)
        return response.city.name
    except geoip2.errors.AddressNotFoundError:
        return "Unknown"

# Definujte čiernu listinu IP adries
blacklist_ips = ['178.143.35', '85.237.234']

@login_required
def tracking_view(request):
    now = timezone.now()

    # Definovanie časových filtrov pre jednotlivé obdobia
    time_filters = {
        '1h': {'delta': timedelta(minutes=5), 'intervals': 12},
        '3h': {'delta': timedelta(minutes=15), 'intervals': 12},
        '24h': {'delta': timedelta(minutes=30), 'intervals': 48},
        'week': {'delta': timedelta(hours=12), 'intervals': 14},
        'month': {'delta': timedelta(days=1), 'intervals': 30},
        'three_months': {'delta': timedelta(days=3), 'intervals': 30},
        'half_year': {'delta': timedelta(weeks=1), 'intervals': 26},
        'year': {'delta': timedelta(weeks=2), 'intervals': 26},
    }

    period = request.GET.get('period', '24h')

    if period in time_filters:
        delta = time_filters[period]['delta']
        intervals = time_filters[period]['intervals']
        start_time = now - delta * intervals
        visitors = Visitor.objects.filter(start_time__gte=start_time)
    else:
        # Pre obdobie 'all', rozdeľte údaje podľa mesiacov za posledný rok
        delta = timedelta(weeks=4)
        intervals = 12
        start_time = now - delta * intervals
        visitors = Visitor.objects.filter(start_time__gte=start_time)

    # Filtrovanie návštevníkov podľa čiernej listiny
    visitors = visitors.exclude(ip_address__in=blacklist_ips)

    # Inicializácia dátových štruktúr
    labels = []
    new_users_data = [0] * intervals
    returning_users_data = [0] * intervals
    total_visits_data = [0] * intervals

    # Inicializácia dátových štruktúr pre IP adresy
    ip_data = {}

    for i in range(intervals):
        interval_start = start_time + delta * i
        interval_end = interval_start + delta

        # Filtrácia návštev pre aktuálny interval
        interval_visitors = visitors.filter(start_time__gte=interval_start, start_time__lt=interval_end)

        # Celkový počet návštev
        total_visits_data[i] = interval_visitors.count()

        # Noví používatelia (unikátne IP adresy v tomto intervale)
        new_users = interval_visitors.values('ip_address').distinct().count()
        new_users_data[i] = new_users

        # Vracajúci sa používatelia (celkový počet návštev mínus noví používatelia)
        returning_users_data[i] = total_visits_data[i] - new_users_data[i]

        # Generovanie popiskov na časovú os
        if period in time_filters:
            if period in ['1h', '3h', '24h']:
                labels.append(interval_start.strftime('%H:%M'))
            elif period == 'week':
                labels.append(interval_start.strftime('%a'))
            elif period in ['month', 'three_months', 'half_year', 'year']:
                if period != 'year':
                    labels.append(interval_start.strftime('%b %d'))
                else:
                    labels.append(interval_start.strftime('%b'))
        else:
            labels.append(interval_start.strftime('%b %Y'))

        for visitor in interval_visitors:
            ip = visitor.ip_address
            if ip not in ip_data:
                ip_data[ip] = {'new': 0, 'returning': 0, 'total': 0}

            # Predpokladáme, že ak je IP adresa nová v tomto intervale, je to nová návšteva
            if not any(ip in interval_visitor.ip_address for interval_visitor in visitors.filter(start_time__lt=interval_start)):
                ip_data[ip]['new'] += 1
            else:
                ip_data[ip]['returning'] += 1

            ip_data[ip]['total'] += 1

    # Získanie zoznamu lokalít a IP adries
    locations = {}
    ip_addresses = []
    for visitor in visitors:
        city = get_city_from_ip(visitor.ip_address)
        ip_addresses.append(visitor.ip_address)
        if city in locations:
            locations[city] += 1
        else:
            locations[city] = 1

    context = {
        'new_users_data': new_users_data,
        'returning_users_data': returning_users_data,
        'total_visits_data': total_visits_data,
        'labels': labels,
        'period': period,
        'new_users_text': f"{sum(new_users_data)}",
        'returning_users_text': f"{sum(returning_users_data)}",
        'total_visits_text': f"{sum(total_visits_data)}",
        'locations': locations,
        'ip_addresses': ip_addresses,
        'ip_data': ip_data,  # Pridajte ip_data do kontextu
    }
    return render(request, 'tracking.html', context)