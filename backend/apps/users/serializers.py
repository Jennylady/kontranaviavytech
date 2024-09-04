from rest_framework import serializers
from apps.users.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from rest_framework.exceptions import AuthenticationFailed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'name', 'email', 'genre']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Users
        fields = ['name', 'email', 'genre', 'password']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        try:
            user = Users.objects.get(email=email)
        except Users.DoesNotExist:
            raise AuthenticationFailed('Invalid credentials, user not found.')

        if not check_password(password, user.password):
            raise AuthenticationFailed('Invalid credentials, wrong password.')

        return {
            'name': user.name,
            'email': user.email,
            'genre': user.genre
        }