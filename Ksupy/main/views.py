from django.shortcuts import render

def index(request):
    return  render(request, 'index.html')
def stih(request):
    return  render(request, 'Stih.html')