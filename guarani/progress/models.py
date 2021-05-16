from django.db import models
from django.conf import settings
from exercises.models import Exercise_detail


class Progress(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, db_column='user_id',  null=False, blank=True, on_delete=models.CASCADE)
    experience = models.IntegerField(blank=True, null=False, default=0)
    level = models.CharField(max_length=100)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Progress"

    def __str__(self):
        return str(self.user_id)+" - "+str(self.level)+" - "+str(self.experience)

class Record(models.Model):
    progress_id = models.ForeignKey(Progress, db_column='progress_id',  null=False, blank=True, on_delete=models.CASCADE)
    exercise_detail_id = models.ForeignKey(Exercise_detail, db_column='progress_id',  null=False, blank=True, on_delete=models.CASCADE)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, db_column='user_id',  null=False, blank=True, on_delete=models.CASCADE)
    status = models.CharField(max_length=100) #TODO:CHANGE TO ENUM

    class Meta:
        verbose_name_plural = "Records"

    def __str__(self):
        return str(self.progress_id)+" - "+str(self.exercise_detail_id)+" - "+str(self.user_id)