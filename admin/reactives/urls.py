from django.urls import path
from .views import Text_to_textListView, Text_to_textDetailView, Text_to_text_detailListView, Text_to_text_detailDetailView

urlpatterns = [
    path('text_to_texts/', Text_to_textListView.as_view(), name="text_to_texts"),
    path('text_to_texts/<pk>', Text_to_textDetailView.as_view()),
    path('text_to_text_details/', Text_to_text_detailListView.as_view(), name="text_to_text_details"),
    path('text_to_text_details/<pk>', Text_to_text_detailDetailView.as_view()),
]
