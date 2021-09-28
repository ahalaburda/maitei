from django.urls import path
from .views import (
    CustomUserCreate,
    BlacklistTokenUpdateView,
    UserListView,
    UserDetailView,
)

app_name = 'users'

urlpatterns = [
    path('users/', UserListView.as_view(), name="users"),
    path('users/<pk>', UserDetailView.as_view()),
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
]
