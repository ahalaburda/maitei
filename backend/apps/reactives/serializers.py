from rest_framework import serializers
from .models import (
    Text_to_text,
    Text_to_text_detail,
    Text_to_media,
    Text_to_media_detail,
    Media_to_text,
    Media_to_text_detail,
    Media_to_media,
    Media_to_media_detail,
)

# TEXT TO TEXT
class Text_to_text_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_text_detail
        fields = '__all__'
        depth = 1


class Text_to_textSerializer(serializers.ModelSerializer):
    answers = serializers.SerializerMethodField()

    def get_answers(self, obj):
        text_to_text = Text_to_text_detailSerializer(
            obj.text_to_text.all(), many=True
        ).data

        return text_to_text

    class Meta:
        model = Text_to_text
        fields = '__all__'


# TEXT TO MEDIA
class Text_to_media_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_media_detail
        fields = '__all__'


class Text_to_mediaSerializer(serializers.ModelSerializer):
    answers = serializers.SerializerMethodField()

    def get_answers(self, obj):
        text_to_media = Text_to_media_detailSerializer(
            obj.text_to_media.all(), many=True
        ).data

        return text_to_media

    class Meta:
        model = Text_to_media
        fields = '__all__'


# MEDIA TO TEXT
class Media_to_text_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media_to_text_detail
        fields = '__all__'


class Media_to_textSerializer(serializers.ModelSerializer):
    answers = serializers.SerializerMethodField()

    def get_answers(self, obj):
        media_to_text = Media_to_text_detailSerializer(
            obj.media_to_text.all(), many=True
        ).data

        return media_to_text

    class Meta:
        model = Media_to_text
        fields = ['id', 'filename', 'description', 'active', 'answers']


# MEDIA TO MEDIA
class Media_to_media_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media_to_media_detail
        fields = '__all__'


class Media_to_mediaSerializer(serializers.ModelSerializer):
    answers = serializers.SerializerMethodField()

    def get_answers(self, obj):
        media_to_media = Media_to_media_detailSerializer(
            obj.media_to_media.all(), many=True
        ).data

        return media_to_media

    class Meta:
        model = Media_to_media
        fields = ['id', 'filename', 'description', 'active', 'answers']
