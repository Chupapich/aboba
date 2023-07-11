from django.db import models
# Нужно доработать модель!
# Create your models here.
class Stih(models.Model):
    title = models.CharField('Название', max_length=255)
    emotionalChoices = [
        ('depr', 'Дипрессивные'),
        ('lov', 'Любовные'),
        ('happ', 'Счастливые')
    ]
    emotional = models.CharField('Вид', max_length=255, choices=emotionalChoices)
    content = models.TextField('Стих', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Стих'
        verbose_name_plural = 'Стихи'