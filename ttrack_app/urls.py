from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('login_page',views.login_page, name='login_page'),
     path('company_create',views.company_create, name='company_create'),
]