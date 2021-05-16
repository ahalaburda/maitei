from rest_framework import serializers

from .models import Level
from .models import Chapter
from .models import Reactive
from .models import Exercise
from .models import Exercise_detail


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'