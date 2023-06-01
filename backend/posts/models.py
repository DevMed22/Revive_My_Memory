from django.db import models
from django.contrib.auth import get_user_model


class Post(models.Model):
    title = models.CharField(max_length=20)
    body = models.TextField()
    thumb = models.ImageField(blank=True, null=True, upload_to='media/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.PROTECT)

    def __str__(self) -> str:
        return self.title
