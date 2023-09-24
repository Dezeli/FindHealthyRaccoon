from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=8)
    date = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField(default=0)