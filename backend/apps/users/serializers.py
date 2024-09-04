from rest_framework import serializers
from apps.users.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from rest_framework.exceptions import AuthenticationFailed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'genre']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'genre', 'password']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        if 'email' not in data or 'password' not in data:
            raise serializers.ValidationError("Les champs 'email' et 'password' sont obligatoires.")

        email = data.get('email')
        password = data.get('password')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise AuthenticationFailed('Invalid credentials, user not found.')

        if not check_password(password, user.password):
            raise AuthenticationFailed('Invalid credentials, wrong password.')

        return {
            'name': user.name,
            'email': user.email,
            'genre': user.genre
        }