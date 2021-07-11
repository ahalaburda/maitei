# Generated by Django 3.2.3 on 2021-05-17 00:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('exercises', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Progress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('experience', models.IntegerField(blank=True, default=0)),
                ('level', models.CharField(max_length=100)),
                ('active', models.BooleanField(default=True)),
                ('user_id', models.ForeignKey(blank=True, db_column='user_id', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Progress',
            },
        ),
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=100)),
                ('current_exercise_id', models.ForeignKey(blank=True, db_column='current_exercise_id', on_delete=django.db.models.deletion.CASCADE, to='exercises.exercise_detail')),
                ('progress_id', models.ForeignKey(blank=True, db_column='progress_id', on_delete=django.db.models.deletion.CASCADE, to='progress.progress')),
                ('user_id', models.ForeignKey(blank=True, db_column='user_id', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Records',
            },
        ),
    ]