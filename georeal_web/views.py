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

def get_location_from_ip(ip_address):
    reader = geoip2.database.Reader('static/GeoLite2-City.mmdb')
    try:
        response = reader.city(ip_address)
        return {
            'lat': float(response.location.latitude),
            'lng': float(response.location.longitude),
            'city': response.city.name or "Unknown"
        }
    except geoip2.errors.AddressNotFoundError:
        return None

# Definujte čiernu listinu IP adries
blacklist_ips = ['178.143.35.40', '85.237.234.159','178.143.35.180']
 
@login_required
def tracking_view(request):
    now = timezone.now()

    # Definovanie časových filtrov pre jednotlivé obdobia
    time_filters = {
        '1h': {'delta': timedelta(minutes=5), 'intervals': 12},
        '3h': {'delta': timedelta(minutes=15), 'intervals': 12},
        '12h': {'delta': timedelta(minutes=30), 'intervals': 24},
        '24h': {'delta': timedelta(minutes=60), 'intervals': 24},
        'week': {'delta': timedelta(days=1), 'intervals': 7},
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

    # Filtrovanie návštevnkov podľa čiernej listiny
    visitors = visitors.exclude(ip_address__in=blacklist_ips)

    # Inicializácia dátových štruktúr
    labels = []
    new_users_data = [0] * intervals
    returning_users_data = [0] * intervals
    total_visits_data = [0] * intervals

    # Inicializácia dátových štruktúr pre IP adresy
    ip_data = {}
    unique_visitors = set()  # Množina pre sledovanie unikátnych návštevníkov
    all_unique_visitors = set()  # Množina pre sledovanie všetkých unikátnych návštevníkov

    for i in range(intervals):
        interval_start = start_time + delta * i
        interval_end = interval_start + delta

        # Filtrácia návštev pre aktuálny interval
        interval_visitors = visitors.filter(start_time__gte=interval_start, start_time__lt=interval_end)
        
        # Celkový počet návštev v intervale
        total_visits_data[i] = interval_visitors.count()
        
        # Získanie unikátnych IP adries v tomto intervale
        interval_unique_ips = set(interval_visitors.values_list('ip_address', flat=True))
        
        # Pridanie nových IP adries do celkovej množiny
        new_unique_ips = interval_unique_ips - all_unique_visitors
        all_unique_visitors.update(new_unique_ips)
        
        # Noví používatelia (celkový počet unikátnych IP adries)
        new_users_data[i] = len(new_unique_ips)
        
        # Vracajúci sa používatelia (celkový počet návštev mínus noví používatelia)
        returning_users_data[i] = total_visits_data[i] - len(interval_unique_ips)

        # Generovanie popiskov na časovú os
        if period in time_filters:
            if period in ['1h', '3h', '12h', '24h']:
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

        # Spracovanie IP dát
        for visitor in interval_visitors:
            ip = visitor.ip_address
            if ip not in ip_data:
                ip_data[ip] = {'new': 1, 'returning': 0, 'total': 1}
            else:
                ip_data[ip]['returning'] = ip_data[ip]['total']
                ip_data[ip]['total'] += 1

    # Získanie zoznamu lokalít a IP adries
    locations = {}
    ip_addresses = []
    
    # Vytvorte slovník s lokáciami a ich súradnicami
    locations_data = {}
    for visitor in visitors:
        ip = visitor.ip_address
        location = get_location_from_ip(ip)
        
        if location:
            last_visit = visitor.start_time
            is_recent = (timezone.now() - last_visit) <= timedelta(hours=1)
            
            if ip not in locations_data:
                locations_data[ip] = {
                    'lat': location['lat'],
                    'lng': location['lng'],
                    'visits': 1,
                    'city': location['city'],
                    'is_recent': is_recent
                }
            else:
                locations_data[ip]['visits'] += 1
                locations_data[ip]['is_recent'] = is_recent

    # Fake IP adresy pre slovenské mestá
    additional_locations = {
        '95.102.45.75': {'lat': 48.9899, 'lng': 21.2421, 'visits': 5, 'city': 'Prešov'},
        '178.143.35.180': {'lat': 49.2231, 'lng': 18.7403, 'visits': 8, 'city': 'Žilina'},
        '95.102.45.80': {'lat': 48.3061, 'lng': 18.0870, 'visits': 3, 'city': 'Nitra'},
        '178.143.35.190': {'lat': 48.7485, 'lng': 19.1571, 'visits': 6, 'city': 'Banská Bystrica'},
        '95.102.45.85': {'lat': 48.5762, 'lng': 19.1371, 'visits': 4, 'city': 'Zvolen'},
        '178.143.35.195': {'lat': 49.0746, 'lng': 20.3037, 'visits': 7, 'city': 'Poprad'},
        '95.102.45.90': {'lat': 48.8921, 'lng': 17.5872, 'visits': 2, 'city': 'Trnava'},
        '178.143.35.200': {'lat': 47.9854, 'lng': 18.1638, 'visits': 5, 'city': 'Komárno'}
    }

    # Pridanie fake lokácií do existujúcich locations_data
    locations_data.update(additional_locations)

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
        'locations_data': locations_data
    }
    return render(request, 'tracking.html', context)