from django.contrib import admin
from main.models import *

class AdminModelSingle(admin.ModelAdmin):
    pass


admin.site.register(Teacher, AdminModelSingle)
admin.site.register(Gallery, AdminModelSingle)
admin.site.register(Review, AdminModelSingle)
admin.site.register(Feedback, AdminModelSingle)