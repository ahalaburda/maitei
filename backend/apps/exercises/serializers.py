from rest_framework import serializers

from .models import Level
from .models import Chapter
from .models import Reactive
from .models import Exercise
from .models import Exercise_detail
from apps.reactives.serializers import Text_to_textSerializer
from apps.reactives.serializers import Text_to_mediaSerializer
from apps.reactives.serializers import Media_to_textSerializer
from apps.reactives.serializers import Media_to_mediaSerializer


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'
        depth = 1
        
class ChapterNewUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter

class ReactiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reactive
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Exercise
        fields = '__all__'


class Exercise_detailSerializer(serializers.ModelSerializer):
    exercise_id_Text_to_text = Text_to_textSerializer()
    exercise_id_Text_to_media = Text_to_mediaSerializer()
    exercise_id_Media_to_text = Media_to_textSerializer()
    exercise_id_Media_to_media = Media_to_mediaSerializer()

    class Meta:
        model = Exercise_detail
        fields = '__all__'
        depth = 1