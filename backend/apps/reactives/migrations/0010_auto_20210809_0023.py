# Generated by Django 3.2.5 on 2021-08-09 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reactives', '0009_remove_media_to_text_detail_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media_to_media',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='media_to_media_detail',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='media_to_text',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='media_to_text_detail',
            name='answer',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='text_to_media',
            name='question',
            field=models.CharField(default='question', max_length=200),
        ),
        migrations.AlterField(
            model_name='text_to_media_detail',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='text_to_text',
            name='question',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='text_to_text_detail',
            name='answer',
            field=models.CharField(max_length=200),
        ),
    ]
