from django.shortcuts import render
from . models import Services, Realisations, Apropos, Avis


# Create your views here.
def index(request):
     # Récupérer tous les services
    service = Services.objects.all()

     # Récupérer tous les avis
    apropos = Apropos.objects.all()

    # Récupérer toutes les réalisations
    realisation = Realisations.objects.all()

     # Récupérer tous les avis
    avis_list = Avis.objects.all()  


# Rendre le template avec les services, réalisations et avis
    return render(request, 'index.html', {
        'service': service,
        'apropos': apropos,
        'realisation': realisation,
        'avis_list': avis_list  # Ajouter les avis à la context
    })


