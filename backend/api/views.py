from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import views, status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework import generics, permissions
from posts.models import Post
from .serializers import PostSerializer
from .serializers import TaskSerializer
from .serializers import DoctorSerializer, PatientSerializer, VolunteerSerializer
from tasks.models import Task


class PostList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class TaskList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(author=self.request.user)
    serializer_class = TaskSerializer


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(author=self.request.user, id=self.request.resolver_match.kwargs['pk'])
    serializer_class = PostSerializer


# Authentication views
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(self, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Doctor Registration


class DoctorRegister(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = DoctorSerializer

# Patient Registration


class PatientRegister(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = PatientSerializer


# Volunteer Registration
class VolunteerRegister(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = VolunteerSerializer

# Login


class UserLoginView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            return Response({'token': user.auth_token.key})
        else:
            return Response({'error': 'Wrong Credentials'}, status=status.HTTP_400_BAD_REQUEST)
