from django_filters import rest_framework as filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response
from .serializers import *

class Text_to_textListView(ListCreateAPIView):
    queryset = Text_to_text.objects.all()
    serializer_class = Text_to_textSerializer

class Text_to_textDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Text_to_text.objects.all()
    serializer_class = Text_to_textSerializer


class Text_to_text_detailListView(ListCreateAPIView):
    queryset = Text_to_text_detail.objects.all()
    serializer_class = Text_to_text_detailSerializer

class Text_to_text_detailDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Text_to_text_detail.objects.all()
    serializer_class = Text_to_text_detailSerializer