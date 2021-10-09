from rest_framework import serializers, fields
from apps.users.models import NewUser


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """

    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    firstname = serializers.CharField(allow_blank=True)
    lastname = serializers.CharField(allow_blank=True)
    birthdate = fields.DateField(input_formats=['%Y-%m-%dT%H:%M:%S.%fZ'])
    avatar = serializers.CharField(allow_blank=True)
    mother_tongue = serializers.CharField(allow_blank=True)
    country = serializers.CharField(allow_blank=True)
    language = serializers.CharField(allow_blank=True)

    class Meta:
        model = NewUser
        fields = ('email', 'username', 'password', 'birthdate', 'firstname','lastname', 'avatar', 'mother_tongue', 'country', 'language')
        # fields = '__all__'

        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = '__all__'
