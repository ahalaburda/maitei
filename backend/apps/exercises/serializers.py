from rest_framework import serializers

from .models import Level
from .models import Chapter
from .models import Reactive
from .models import Exercise
from .models import Exercise_detail


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'
        depth = 1


class ReactiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reactive
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Exercise
        fields = '__all__'
        depth = 2


class Exercise_detailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise_detail
        fields = '__all__'
        depth = 1

