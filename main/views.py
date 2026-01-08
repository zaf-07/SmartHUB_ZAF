from django.shortcuts import render
from main.models import *
# Create your views here.

def indexHandler(request):
    teachers = Teacher.objects.filter(status=True)
    galleries = Gallery.objects.all()
    reviews = Review.objects.filter(status=True)

    if request.POST:
        feed = Feedback()
        feed.name = request.POST.get('name', '')
        feed.phone = request.POST.get('phone', '')
        feed.message = request.POST.get('message')
        feed.save()
        from django.shortcuts import redirect
        return redirect('/')


    return render(request, 'index.html', {
        'teachers': teachers,
        'reviews': reviews,
        'galleries': galleries,
    })

