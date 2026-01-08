from django.db import models

# Create your models here.


class Teacher(models.Model):
    first_name = models.CharField(max_length=100)
    sur_name = models.CharField(max_length=100)
    job = models.CharField(max_length=60)
    phone = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='upload')
    facebook = models.TextField(max_length=500, blank=True)
    instagram = models.TextField(max_length=500, blank=True)
    telegram = models.TextField(max_length=500, blank=True)
    whatsapp = models.TextField(max_length=500, blank=True)
    status = models.BooleanField(default=True, blank=True)


    def __str__(self):
        return f'{self.first_name} {self.first_name}'


class Gallery(models.Model):
    img = models.ImageField(upload_to='upload')

    def __str__(self):
        return f'{self.img}'

class Review(models.Model):
    author = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=True)
    insta_link = models.TextField(max_length=500, blank=True)
    status = models.BooleanField(default=True, blank=True)

    def __str__(self):
        return f'{self.author}'


class Feedback(models.Model):
    name = models.CharField(max_length=100,blank=True)
    phone = models.CharField(max_length=20, blank=True)
    message = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return f'{self.name} {self.phone}'