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
    """
    Serializer para listar las Capitulos, utilizando el atributo depth para mostrar el valor de sus
    foreign key.
    """
    level = serializers.ReadOnlyField(source='level_id.description')

    class Meta:
        model = Chapter
        fields = ('id', 'level', 'description', 'status')
        depth = 1
        # https://www.django-rest-framework.org/api-guide/serializers/#specifying-nested-serialization
        # https://es.stackoverflow.com/questions/5419/django-rest-framework-serializando-modelos-que-tienen-campos-relaciones-foreignk?rq=1
        # depth permite acceder a los valores de la foreign key.

class ReactiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reactive
        fields = '__all__'

class ExerciseSerializer(serializers.ModelSerializer):
    Chapter = serializers.ReadOnlyField(source='chapter_id.description')
    
    class Meta:
        model = Chapter
        fields = ('id', 'chapter', 'status')
        depth = 1

class Exercise_detailSerializer(serializers.ModelSerializer):

    exercise = serializers.ReadOnlyField(source='exercise_id.description')
    reactive = serializers.ReadOnlyField(source='reactive_id.description')
    
    class Meta:
        model = Chapter
        fields = ('id', 'exercise', 'reactive')
        depth = 1

