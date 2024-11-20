from django.contrib import admin
from .models import Apropos, Services, Realisations,Avis
# Register your models here.


admin.site.register(Apropos)
class AproposAdmin(admin.ModelAdmin):
    list_display = ('description')
    
admin.site.register(Services)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('titre', 'description')

admin.site.register(Realisations)  
class RealisationAdmin(admin.ModelAdmin):
    list_display = ('title',)  
    
admin.site.register(Avis)
class AvisAdmin(admin.ModelAdmin):
    list_display = ('auteur', 'contenu')
    search_fields = ('auteur', 'contenu')
