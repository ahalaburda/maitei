from django.db import models

# from django.conf import settings


class Text_to_text(models.Model):
    description = models.CharField(max_length=300, blank=True)
    question = models.CharField(max_length=300)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Text to texts"

    def __str__(self):
        return str(self.question)


class Text_to_text_detail(models.Model):
    text_to_text_id = models.ForeignKey(
        Text_to_text,
        db_column='text_to_text_id',
        related_name='text_to_text',
        null=False,
        blank=True,
        on_delete=models.CASCADE,
    )
    answer = models.CharField(max_length=200)
    correct_answer = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Text to text details"

    def __str__(self):
        return str(self.answer)


class Text_to_media(models.Model):
    question = models.CharField(max_length=200, default="question")
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Text to media files"

    def __str__(self):
        return str(self.id)+" - "+str(self.question)


class Text_to_media_detail(models.Model):
    text_to_media_id = models.ForeignKey(
        Text_to_media,
        db_column='text_to_media_id',
        related_name='text_to_media',
        null=False,
        blank=True,
        on_delete=models.CASCADE,
    )
    answer_filename = models.FileField(
        upload_to='text_to_media/', null=True, blank=True
    )
    correct_answer = models.BooleanField(default=False)
    description = models.CharField(max_length=200, blank=True)

    class Meta:
        verbose_name_plural = "Text to media files details"

    def __str__(self):
        return str(self.answer_filename)


class Media_to_text(models.Model):
    filename = models.FileField(upload_to='media_to_text/', null=True, blank=True)
    description = models.CharField(max_length=200, blank=True)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Media file to texts"

    def __str__(self):
        return str(self.filename)


class Media_to_text_detail(models.Model):
    media_to_text_id = models.ForeignKey(
        Media_to_text,
        db_column='media_to_text_id',
        related_name='media_to_text',
        null=False,
        blank=True,
        on_delete=models.CASCADE,
    )
    answer = models.CharField(max_length=200)
    correct_answer = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Media file to texts details"

    def __str__(self):
        return str(self.answer)


class Media_to_media(models.Model):
    filename = models.FileField(upload_to='media_to_media/', null=True, blank=True)
    description = models.CharField(max_length=200, blank=True)
    active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Media file to media files"

    def __str__(self):
        return str(self.filename)


class Media_to_media_detail(models.Model):
    media_to_media_id = models.ForeignKey(
        Media_to_media,
        db_column='media_to_media_id',
        related_name='media_to_media',
        null=False,
        blank=True,
        on_delete=models.CASCADE,
    )
    answer_filename = models.FileField(
        upload_to='Media_to_media_details/', null=True, blank=True
    )
    correct_answer = models.BooleanField(default=False)
    description = models.CharField(max_length=200, blank=True)

    class Meta:
        verbose_name_plural = "Media file to media files details"

    def __str__(self):
        return str(self.answer_filename)
