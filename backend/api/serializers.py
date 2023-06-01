from rest_framework.authtoken.models import Token
from rest_framework import serializers
from posts.models import Post
from tasks.models import Task
from accounts.models import Profile
from doctors.models import Doctor
from patients.models import Patient
from volunteers.models import Volunteer
from django.contrib.auth.models import Group


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


# Authentication serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('username', 'email', "first_name", "last_name")


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ("name", )


# Doctor Serializer
class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = [
            'id',
            'username',
            'name',
            'email',
            'usertype',
            'profilePic',
            'birthdate',
            'major',
            'password',
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Doctor(
            email=validated_data['email'],
            username=validated_data['username'],
            name=validated_data['name'],
            usertype=validated_data['usertype'],
            profilePic=validated_data['profilePic'],
            birthdate=validated_data['birthdate'],
            major=validated_data['major'],
        )

        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user


# Volunteer Serializer
class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = [
            'id',
            'username',
            'name',
            'email',
            'usertype',
            'profilePic',
            'birthdate',
            'doctorv',
            'password',
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Volunteer(
            email=validated_data['email'],
            username=validated_data['username'],
            name=validated_data['name'],
            usertype=validated_data['usertype'],
            profilePic=validated_data['profilePic'],
            birthdate=validated_data['birthdate'],
            docotrv=validated_data['doctorv'],
        )
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user


# Patient Serializer
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'id',
            'username',
            'name',
            'email',
            'usertype',
            'profilePic',
            'birthdate',
            'doctorp',
            'carername',
            'carerphonenumber',
            'careremail',
            'password',
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Patient(
            email=validated_data['email'],
            username=validated_data['username'],
            name=validated_data['name'],
            usertype=validated_data['usertype'],
            profilePic=validated_data['profilePic'],
            birthdate=validated_data['birthdate'],
            doctorp=validated_data['doctorp'],
            carername=validated_data['carername'],
            carerphonenumber=validated_data['carerphonenumber'],
            careremail=validated_data['careremail'],
        )
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user
