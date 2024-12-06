from django.shortcuts import render
# from django.views.decorators.cache import cache_page
from django.contrib.auth.decorators import login_required, user_passes_test
from django.shortcuts import redirect
from django.db.models import Count
from tracking.models import Visitor

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

def tracking_view(request):
    now = timezone.now()

    # Definovanie časových filtrov pre jednotlivé obdobia
    time_filters = {
        '1h': {'delta': timedelta(minutes=15), 'intervals': 4},
        '3h': {'delta': timedelta(minutes=30), 'intervals': 6},
        '24h': {'delta': timedelta(hours=6), 'intervals': 4},
        'week': {'delta': timedelta(days=1), 'intervals': 7},
        'month': {'delta': timedelta(days=1), 'intervals': 30},
        'three_months': {'delta': timedelta(weeks=1), 'intervals': 12},
        'half_year': {'delta': timedelta(weeks=2), 'intervals': 26},
        'year': {'delta': timedelta(weeks=4), 'intervals': 12},
    }

    period = request.GET.get('period', 'all')

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

    # Inicializácia dátových štruktúr
    labels = []
    new_users_data = [0] * intervals
    returning_users_data = [0] * intervals
    total_visits_data = [0] * intervals

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

        # Vracajúci sa používatelia (IP adresy, ktoré boli v minulosti)
        current_ips = interval_visitors.values_list('ip_address', flat=True)
        returning_users = Visitor.objects.filter(ip_address__in=current_ips, start_time__lt=interval_start).values('ip_address').distinct().count()
        returning_users_data[i] = returning_users

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

    context = {
        'new_users_data': new_users_data,
        'returning_users_data': returning_users_data,
        'total_visits_data': total_visits_data,
        'labels': labels,
        'period': period,
    }
    return render(request, 'tracking.html', context)