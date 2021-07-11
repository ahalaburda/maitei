from django.contrib import admin

# Register your models here.
from .models import Level
from .models import Chapter
from .models import Reactive
from .models import Exercise
from .models import Exercise_detail


class ChapterTabularInline(admin.TabularInline):
	model = Chapter

class LevelAdmin(admin.ModelAdmin):
	inlines = [ChapterTabularInline]
	class Meta:
		model = Level

class Exercise_detailTabularInline(admin.TabularInline):
	model = Exercise_detail

class ExerciseAdmin(admin.ModelAdmin):
	inlines = [Exercise_detailTabularInline]
	class Meta:
		model = Exercise

admin.site.register(Level, LevelAdmin)
admin.site.register(Chapter)
admin.site.register(Reactive)
admin.site.register(Exercise, ExerciseAdmin)
admin.site.register(Exercise_detail)
