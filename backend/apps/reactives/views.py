from django_filters import rest_framework as filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response
from .models import Text_to_text, Text_to_text_detail
from .models import Text_to_media, Text_to_media_detail
from .models import Media_to_text, Media_to_text_detail
from .models import Media_to_media, Media_to_media_detail
from .serializers import Text_to_textSerializer, Text_to_text_detailSerializer
from .serializers import Text_to_mediaSerializer, Text_to_media_detailSerializer
from .serializers import Media_to_textSerializer, Media_to_text_detailSerializer
from .serializers import Media_to_mediaSerializer, Media_to_media_detailSerializer

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



class Text_to_mediaListView(ListCreateAPIView):
    queryset = Text_to_media.objects.all()
    serializer_class = Text_to_mediaSerializer

class Text_to_mediaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Text_to_media.objects.all()
    serializer_class = Text_to_mediaSerializer

class Text_to_media_detailListView(ListCreateAPIView):
    queryset = Text_to_media_detail.objects.all()
    serializer_class = Text_to_media_detailSerializer

class Text_to_media_detailDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Text_to_media_detail.objects.all()
    serializer_class = Text_to_media_detailSerializer



class Media_to_textListView(ListCreateAPIView):
    queryset = Media_to_text.objects.all()
    serializer_class = Media_to_textSerializer

class Media_to_textDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Media_to_text.objects.all()
    serializer_class = Media_to_textSerializer

class Media_to_text_detailListView(ListCreateAPIView):
    queryset = Media_to_text_detail.objects.all()
    serializer_class = Media_to_text_detailSerializer

class Media_to_text_detailDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Media_to_text_detail.objects.all()
    serializer_class = Media_to_text_detailSerializer


class Media_to_mediaListView(ListCreateAPIView):
    queryset = Media_to_media.objects.all()
    serializer_class = Media_to_mediaSerializer

class Media_to_mediaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Media_to_media.objects.all()
    serializer_class = Media_to_mediaSerializer

class Media_to_media_detailListView(ListCreateAPIView):
    queryset = Media_to_media_detail.objects.all()
    serializer_class = Media_to_media_detailSerializer

class Media_to_media_detailDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Media_to_media_detail.objects.all()
    serializer_class = Media_to_media_detailSerializer

