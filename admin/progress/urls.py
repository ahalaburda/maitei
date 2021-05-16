from django.urls import path
from .views import ProgressListView, ProgressDetailView, RecordListView, RecordDetailView

urlpatterns = [
    path('progress/', ProgressListView.as_view(), name="progress"),
    path('progress/<pk>', ProgressDetailView.as_view()),
    path('records/', RecordListView.as_view(), name="record"),
    path('records/<pk>', RecordDetailView.as_view()),
]
