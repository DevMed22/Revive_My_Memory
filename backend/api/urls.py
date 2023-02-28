from django.urls import path
from .views import PostList, PostDetail


urlpatterns = [
    path('', PostList.as_view(), name='post-list-api'),
    path('<int:pk>/', PostDetail.as_view(), name='post-detail-api')
]
