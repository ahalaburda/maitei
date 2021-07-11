from django.db import models
from django.conf import settings
from apps.reactives.models import Text_to_text
from apps.reactives.models import Text_to_media
from apps.reactives.models import Media_to_text
from apps.reactives.models import Media_to_media

class Level(models.Model):
    description = models.CharField(max_length=100)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Levels"

    def __str__(self):
        return str(self.description)


class Chapter(models.Model):
    level_id = models.ForeignKey(Level, db_column='level_id',  null=False, blank=True, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    active = models.BooleanField(default=True)
    chapter_image  = models.FileField(upload_to='chapter/',null=True, blank=True)

    class Meta:
        verbose_name_plural = "Chapters"

    def __str__(self):
        return str(self.level_id)+" - "+str(self.description)


class Reactive(models.Model):
    description = models.CharField(max_length=100)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Reactives"

    def __str__(self):
        return str(self.id)+" - "+str(self.description)


class Exercise(models.Model):
    chapter_id = models.ForeignKey(Chapter, db_column='chapter_id',  null=False, blank=True, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Exercises"

    def __str__(self):
        return str(self.chapter_id)+" - "+str(self.description)


class Exercise_detail(models.Model):
    exercise_id = models.ForeignKey(Exercise, db_column='exercise_id',  null=False, blank=True, on_delete=models.CASCADE)
    reactive_id = models.ForeignKey(Reactive, db_column='reactive_id',  null=False, blank=True, on_delete=models.CASCADE)
    
    exercise_id_Text_to_text = models.ForeignKey(Text_to_text, db_column='exercise_id_Text_to_text',  null=True, blank=True, on_delete=models.CASCADE)
    exercise_id_Text_to_media = models.ForeignKey(Text_to_media, db_column='exercise_id_Text_to_media',  null=True, blank=True, on_delete=models.CASCADE)
    exercise_id_Media_to_text = models.ForeignKey(Media_to_text, db_column='exercise_id_Media_to_text',  null=True, blank=True, on_delete=models.CASCADE)
    exercise_id_Media_to_media = models.ForeignKey(Media_to_media, db_column='exercise_id_Media_to_media',  null=True, blank=True, on_delete=models.CASCADE)
    
    order = models.IntegerField(blank=True, null=False, default=1)
    experience = models.IntegerField(blank=True, null=False, default=100)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Exercises Details"

    def __str__(self):
        return "Order #"+str(self.order)+" - "+str(self.reactive_id.description)
