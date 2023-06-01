from django.urls import path
from .views import PostList, PostDetail
from .views import TaskList, TaskDetail
from .views import MyTokenObtainPairView
from .views import DoctorRegister, PatientRegister, VolunteerRegister
from .views import UserLoginView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('posts/', PostList.as_view(), name='post-list-api'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail-api'),
    path('tasks/', TaskList.as_view(), name='task-list-api'),
    path('tasks/<int:pk>/', TaskDetail.as_view(), name='task-detail-api'),
    # Authentication
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('doctor/register/', DoctorRegister.as_view(), name='doctor-register'),
    path('patient/register/', PatientRegister.as_view(), name='patient-register'),
    path('voluteer/register/', VolunteerRegister.as_view(),
         name='voluteer-register'),

]
