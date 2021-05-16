from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .models import Progress, Record
from .serializers import ProgressSerializer, RecordSerializer
from rest_framework.response import Response
from django_filters import rest_framework as filters


class ProgressListView(ListCreateAPIView):
    """
    Lista de todas las dependencias. Se permite se permite la creacion de una nueva dependencia en la misma vista.
    """
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer


class ProgressDetailView(RetrieveUpdateDestroyAPIView):
    """
    Vista para una sola dependencia de acuerdo a su ID, se permite actualizar y eliminar en la misma vista.
    """
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer


class RecordFilter(filters.FilterSet):
    class Meta:
        model = Record
        fields = ('progress_id','user_id')


class RecordListView(ListCreateAPIView):
    """
    Lista para todas las dependencias por usuario. Se permite la creacion de una nueva dependencia por usuaro en
    la misma vista.
    """
    queryset = Record.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = RecordFilter

    # si es post se utiliza el serializer para actualizar, si no, simplemente el destinado a listar.
    # def get_serializer_class(self):
    #     if self.request.method in ['POST']:
    #         return Dependencia_por_usuarioNewUpdateSerializer
    #     return Dependencia_por_usuarioSerializer


class RecordDetailView(RetrieveUpdateDestroyAPIView):
    """
    Vista para una sola dependencia por usuario de acuerdo a su ID, se permite actualizar y eliminar en la misma vista.
    """
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    # # de la misma manera para el metodo de la clase anterior.
    # def get_serializer_class(self):
    #     if self.request.method in ['PUT']:
    #         return Dependencia_por_usuarioNewUpdateSerializer
    #     elif self.request.method in ['PATCH']:
    #         return Dependencia_por_usuarioNewUpdateSerializer
    #     return Dependencia_por_usuarioSerializer
