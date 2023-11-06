from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import pymongo
import pandas as pd
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.files.storage import FileSystemStorage


myclient = pymongo.MongoClient('mongodb://localhost:27017/')
db = 'ttrack_db'
mydb = myclient[db]

# Create your views here.


def login_page(request):
    return render(request, 'login_page.html')



def company_create(request):
    return render(request, 'company_create.html')


