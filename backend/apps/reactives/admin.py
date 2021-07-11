from django.contrib import admin

from .models import Text_to_text
from .models import Text_to_text_detail
from .models import Text_to_media
from .models import Text_to_media_detail
from .models import Media_to_text
from .models import Media_to_text_detail
from .models import Media_to_media
from .models import Media_to_media_detail


class Text_to_text_detailTabularInline(admin.TabularInline):
	model = Text_to_text_detail

class Text_to_textAdmin(admin.ModelAdmin):
	inlines = [Text_to_text_detailTabularInline]
	class Meta:
		model = Text_to_text

class Text_to_media_detailTabularInline(admin.TabularInline):
	model = Text_to_media_detail

class Text_to_mediaAdmin(admin.ModelAdmin):
	inlines = [Text_to_media_detailTabularInline]
	class Meta:
		model = Text_to_media

class Media_to_text_detailTabularInline(admin.TabularInline):
	model = Media_to_text_detail

class Media_to_textAdmin(admin.ModelAdmin):
	inlines = [Media_to_text_detailTabularInline]
	class Meta:
		model = Media_to_text

class Media_to_media_detailTabularInline(admin.TabularInline):
	model = Media_to_media_detail

class Media_to_mediaAdmin(admin.ModelAdmin):
	inlines = [Media_to_media_detailTabularInline]
	class Meta:
		model = Media_to_media

admin.site.register(Text_to_text, Text_to_textAdmin)
# admin.site.register(Text_to_text_detail)
admin.site.register(Text_to_media, Text_to_mediaAdmin)
# admin.site.register(Text_to_media_detail)
admin.site.register(Media_to_text, Media_to_textAdmin)
# admin.site.register(Media_to_text_detail)
admin.site.register(Media_to_media, Media_to_mediaAdmin)
# admin.site.register(Media_to_media_detail)