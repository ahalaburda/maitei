from django.db import models
# from django.conf import settings


class Text_to_text(models.Model):
    question = models.CharField(max_length=100)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Text to texts"

    def __str__(self):
        return str(self.question)


class Text_to_text_detail(models.Model):
    text_to_text_id = models.ForeignKey(Text_to_text, db_column='text_to_text_id', null=False, blank=True, on_delete=models.CASCADE)
    answer = models.CharField(max_length=100)
    correct_answer = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Text to text details"

    def __str__(self):
        return str(self.answer)
