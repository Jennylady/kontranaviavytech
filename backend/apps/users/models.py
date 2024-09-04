from django.db import models

class User(models.Model):
    name = models.TextField()
    email = models.EmailField()
    genre = models.CharField(max_length=40)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name.title()
    
    class Meta :
        db_table = "users"