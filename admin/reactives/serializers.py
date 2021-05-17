from rest_framework import serializers
from .models import Text_to_text, Text_to_text_detail
# from apps.reactives.api.serializers import Text_to_textSerializer
# from apps.reactives.api.serializers import Text_to_text_detailSerializer


class Text_to_textSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_text
        fields = '__all__'


class Text_to_text_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text_to_text_detail
        fields = '__all__'
        depth = 1
