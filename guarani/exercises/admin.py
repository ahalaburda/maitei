from django.contrib import admin

# Register your models here.
from .models import Level
from .models import Chapter
from .models import Reactive
from .models import Exercise
from .models import Exercise_detail

admin.site.register(Level)
admin.site.register(Chapter)
admin.site.register(Reactive)
admin.site.register(Exercise)
admin.site.register(Exercise_detail)

