from django.contrib import admin

# Register your models here.
from .models import Progress
from .models import Record

admin.site.register(Progress)
admin.site.register(Record)
