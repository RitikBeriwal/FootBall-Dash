from .Serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework import viewsets, permissions



class CountryViewset(viewsets.ViewSet):
  permission_classes=[permissions.AllowAny]
  queryset = Country.objects.all()
  serializer_class=CountrySerializer



  def list(self,request):
    queryset=Country.objects.all()
    serializer = self.serializer_class(queryset,many=True)
    return Response(serializer.data)



class LeagueViewset(viewsets.ViewSet):
  permission_classes=[permissions.AllowAny]
  queryset = League.objects.all()
  serializer_class=LeagueSerializer



  def list(self,request):
    queryset=League.objects.all()
    serializer = self.serializer_class(queryset,many=True)
    return Response(serializer.data) 





class CharacteristicViewset(viewsets.ViewSet):
  permission_classes=[permissions.AllowAny]
  queryset = Characteristic.objects.all()
  serializer_class=CharacteristicSerializer



  def list(self,request):
    queryset=Characteristic.objects.all()
    serializer = self.serializer_class(queryset,many=True)
    return Response(serializer.data)   





class FootballClubViewset(viewsets.ViewSet):
  permission_classes=[permissions.AllowAny] 
  queryset =  Footballclub.objects.all()
  serializer_class=FootballclubSerializer


  def create(self,request):
    print(request.data)
    serializer = self.serializer_class(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=201)
    else:
      return Response(serializer.errors, status=500)
