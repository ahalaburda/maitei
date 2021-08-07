from django_filters import rest_framework as filters
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
)
from rest_framework.response import Response

# from .models import Level, Chapter, Reactive, Exercise, Exercise_detail
# from .serializers import LevelSerializer, ChapterSerializer, ChapterNewUpdateSerializer, ReactiveSerializer, ExerciseSerializer, Exercise_detailSerializer
from .serializers import *
from .models import *


class LevelListView(ListCreateAPIView):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class LevelDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class ChapterFilter(filters.FilterSet):
    level = filters.NumberFilter(field_name='level_id', lookup_expr='exact')

    class Meta:
        model: Chapter
        fields = 'level'


class ChapterListView(ListCreateAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = ChapterFilter

    def list(self, request, *args, **kwargs):
        filtered_list = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(filtered_list, many=True)
        return Response(serializer.data)


class ChapterDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer


class ReactiveListView(ListCreateAPIView):
    queryset = Reactive.objects.all()
    serializer_class = ReactiveSerializer


class ReactiveDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Reactive.objects.all()
    serializer_class = ReactiveSerializer


class ExerciseFilter(filters.FilterSet):
    chapter = filters.NumberFilter(field_name='chapter_id', lookup_expr='exact')

    class Meta:
        model: Exercise
        fields = 'chapter'


class ExerciseListView(ListCreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = ExerciseFilter

    def list(self, request, *args, **kwargs):
        filtered_list = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(filtered_list, many=True)
        return Response(serializer.data)


class ExerciseDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class Exercise_detail_filter_by_Id(filters.FilterSet):
    """ """

    exercise_id = filters.NumberFilter(field_name='exercise_id', lookup_expr='exact')

    class Meta:
        model = Exercise_detail
        fields = ('exercise_id',)


class Exercise_detailListView(ListCreateAPIView):
    """
    Vista para todos los ejercicios
    """

    queryset = Exercise_detail.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = Exercise_detail_filter_by_Id

    def get_serializer_class(self):
        if self.request.method in ['POST']:
            return Exercise_detailSerializer
        return Exercise_detailSerializer

    def list(self, request, *args, **kwargs):
        filtered_list = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(filtered_list, many=True)
        return Response(serializer.data)


class Exercise_detailDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exercise_detail.objects.all()
    serializer_class = Exercise_detailSerializer
