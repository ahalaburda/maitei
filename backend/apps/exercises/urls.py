from django.urls import path
# from .views import LevelListView, LevelDetailView, ChapterListView, ChapterDetailView, ReactiveListView, ReactiveDetailView,ExerciseListView, ExerciseDetailView, Exercise_detailListView, Exercise_detailDetailView
from .views import *

urlpatterns = [
    path('levels/', LevelListView.as_view(), name="levels"),
    path('levels/<pk>', LevelDetailView.as_view()),
    path('chapters/', ChapterListView.as_view(), name="chapters"),
    path('chapters/<pk>', ChapterDetailView.as_view()),
    path('reactives/', ReactiveListView.as_view(), name="reactives"),
    path('reactives/<pk>', ReactiveDetailView.as_view()),
    path('exercises/', ExerciseListView.as_view(), name="exercises"),
    path('exercises/<pk>', ExerciseDetailView.as_view()),
    path('exercise_details/', Exercise_detailListView.as_view(), name="exercise_details"),
    path('exercise_details/<pk>', Exercise_detailDetailView.as_view()),
]
