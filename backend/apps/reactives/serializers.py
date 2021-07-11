from rest_framework import serializers
from .models import Text_to_text, Text_to_text_detail, Text_to_media, Text_to_media_detail, Media_to_text, Media_to_text_detail, Media_to_media, Media_to_media_detail


class Text_to_textSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_text
        fields = '__all__'

class Text_to_text_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_text_detail
        fields = '__all__'
        depth = 1


class Text_to_mediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_media
        fields = '__all__'

class Text_to_media_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_media_detail
        fields = '__all__'
        depth = 1


class Media_to_textSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media_to_text
        fields = '__all__'

class Media_to_text_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media_to_text_detail
        fields = '__all__'
        depth = 1


class Media_to_mediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media_to_media
        fields = '__all__'
        depth = 1

class Media_to_media_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media_to_media_detail
        fields = '__all__'
        depth = 1
