from django.db import models

# Create your models here.

class Services(models.Model):
    titre = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')

    class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'

    def __str__(self):
        return self.titre
    
class Apropos(models.Model):
    description= models.TextField()

    class Meta:
        verbose_name = 'Apropos'
        verbose_name_plural = 'Apropos'

    def __str__(self):
        return self.description

class Realisations(models.Model):
    titre = models.CharField(max_length=100)
    image = models.ImageField(upload_to='realisations/')

    class Meta:
        verbose_name = 'Realisation'
        verbose_name_plural = 'Realisations'

    def __str__(self):
        return self.titre
    

class Avis(models.Model):
    auteur = models.CharField(max_length=100)
    contenu = models.TextField()
    image_google = models.ImageField(upload_to='images/', blank=True, null=True)  # Image pour Google
    image_avis = models.ImageField(upload_to='images/', blank=True, null=True)    # Image pour les avis

    class Meta:
        verbose_name = 'Avis'
        verbose_name_plural = 'Avis'

    def __str__(self):
        return self.auteur
    

