from django.urls import path
from .views import Text_to_textListView, Text_to_textDetailView, Text_to_text_detailListView, Text_to_text_detailDetailView
from .views import Text_to_mediaListView, Text_to_mediaDetailView, Text_to_media_detailListView, Text_to_media_detailDetailView
from .views import Media_to_textListView, Media_to_textDetailView, Media_to_text_detailListView, Media_to_text_detailDetailView
from .views import Media_to_mediaListView, Media_to_mediaDetailView, Media_to_media_detailListView, Media_to_media_detailDetailView

urlpatterns = [
    path('text_to_texts/', Text_to_textListView.as_view(), name="text_to_texts"),
    path('text_to_texts/<pk>', Text_to_textDetailView.as_view()),
    path('text_to_text_details/', Text_to_text_detailListView.as_view(), name="text_to_text_details"),
    path('text_to_text_details/<pk>', Text_to_text_detailDetailView.as_view()),

    path('text_to_medias/', Text_to_mediaListView.as_view(), name="text_to_medias"),
    path('text_to_texts/<pk>', Text_to_mediaDetailView.as_view()),
    path('text_to_text_details/', Text_to_media_detailListView.as_view(), name="text_to_media_details"),
    path('text_to_text_details/<pk>', Text_to_media_detailDetailView.as_view()),

    path('media_to_texts/', Media_to_textListView.as_view(), name="media_to_texts"),
    path('media_to_texts/<pk>', Media_to_textDetailView.as_view()),
    path('media_to_text_details/', Media_to_text_detailListView.as_view(), name="media_to_text_details"),
    path('media_to_text_details/<pk>', Media_to_text_detailDetailView.as_view()),

    path('media_to_medias/', Media_to_mediaListView.as_view(), name="Media_to_medias"),
    path('media_to_medias/<pk>', Media_to_mediaDetailView.as_view()),
    path('media_to_media_details/', Media_to_media_detailListView.as_view(), name="Media_to_media_details"),
    path('media_to_media_details/<pk>', Media_to_media_detailDetailView.as_view())
]
