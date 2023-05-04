from django.urls import path

from . import views

app_name = 'georeal_web'

urlpatterns = [
    path('hello_world', views.hello_world, name='hello_world'),
    path('', views.home, name='home'),
]

