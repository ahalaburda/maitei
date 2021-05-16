from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .models import Level, Chapter, Reactive, Exercise, Exercise_detail
from .serializers import LevelSerializer, ChapterSerializer, ReactiveSerializer, ExerciseSerializer, Exercise_detailSerializer
from rest_framework.response import Response
from django_filters import rest_framework as filters


class LevelListView(ListCreateAPIView):
    """
    Lista de todas las dependencias. Se permite se permite la creacion de una nueva dependencia en la misma vista.
    """
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class LevelDetailView(RetrieveUpdateDestroyAPIView):
    """
    Vista para una sola dependencia de acuerdo a su ID, se permite actualizar y eliminar en la misma vista.
    """
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


# class ChapterFilter(filters.FilterSet):
#     class Meta:
#         model = Chapter
#         fields = ('level_id')


class ChapterListView(ListCreateAPIView):
    """
    Lista para todas las dependencias por usuario. Se permite la creacion de una nueva dependencia por usuaro en
    la misma vista.
    """
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    # filter_backends = (filters.DjangoFilterBackend,)
    # filter_class = ChapterFilter

    # si es post se utiliza el serializer para actualizar, si no, simplemente el destinado a listar.
    # def get_serializer_class(self):
    #     if self.request.method in ['POST']:
    #         return Dependencia_por_usuarioNewUpdateSerializer
    #     return Dependencia_por_usuarioSerializer


class ChapterDetailView(RetrieveUpdateDestroyAPIView):
    """
    Vista para una sola dependencia por usuario de acuerdo a su ID, se permite actualizar y eliminar en la misma vista.
    """
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    # # de la misma manera para el metodo de la clase anterior.
    # def get_serializer_class(self):
    #     if self.request.method in ['PUT']:
    #         return Dependencia_por_usuarioNewUpdateSerializer
    #     elif self.request.method in ['PATCH']:
    #         return Dependencia_por_usuarioNewUpdateSerializer
    #     return Dependencia_por_usuarioSerializer


class ReactiveListView(ListCreateAPIView):
    queryset = Reactive.objects.all()
    serializer_class = ReactiveSerializer


class ReactiveDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Reactive.objects.all()
    serializer_class = ReactiveSerializer

class ExerciseListView(ListCreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class ExerciseDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class Exercise_detailListView(ListCreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class Exercise_detailDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


