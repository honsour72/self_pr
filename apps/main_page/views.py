from django.shortcuts import render
from django.http import HttpResponse


def homepage(request):
    # return HttpResponse("Hello world")
    return render(request, 'main_page.html')

