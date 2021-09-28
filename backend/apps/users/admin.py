from django.contrib import admin
from apps.users.models import NewUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models


class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'username', 'firstname', 'lastname', 'language')
    list_filter = ('language', 'is_active', 'is_staff')
    ordering = ('-date_joined',)
    list_display = ('email', 'username', 'firstname', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'username', 'avatar', 'date_joined')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('firstname', 'lastname','language','mother_tongue', 'birthdate', 'country')}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})}
    }
    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': (
                    'email',
                    'username',
                    'firstname',
                    'lastname',
                    'language',
                    'password1',
                    'password2',
                    'is_active',
                    'is_staff',
                ),
            },
        ),
    )


admin.site.register(NewUser, UserAdminConfig)
