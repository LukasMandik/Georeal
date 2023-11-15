from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def hello_world(request):
    return HttpResponse("Hello world!")


def home(request):

    return render(request, 'home.html')

def cookies(request):

    return render(request, 'cookies.html')