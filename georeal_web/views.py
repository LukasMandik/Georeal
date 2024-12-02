from django.shortcuts import render
from django.views.decorators.cache import cache_page
# Create your views here.
@cache_page(60 * 15) 
def home(request):
    return render(request, 'home.html')

def cookies(request):

    return render(request, 'cookies.html')
# def pricing(request):
#     return render(request, 'pricing.html')