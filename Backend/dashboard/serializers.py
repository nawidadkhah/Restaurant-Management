from rest_framework import serializers
from .models import RestaurantMenuModel,siteAdminModel

# showing restaurant menu
class RestaurantMenuModelSerializer(serializers.ModelSerializer):
   class Meta:
      model = RestaurantMenuModel
      fields = '__all__'

class RestaurantMenuAllSerializer(serializers.ModelSerializer):
   class Meta:
      model = RestaurantMenuModel
      fields = '__all__'

class RestaurantAdminProfileModelSerializer(serializers.ModelSerializer):
   class Meta:
      # data base model should be changed to site admin once it is defiend
      model = siteAdminModel
      fields = ('restaurantDescription', 'restaurantImage',)


# this section is used for site admin and restaurant

# showing all restaurants info's in homepage
class RestaurantAdminGetMenuSerializer(serializers.ModelSerializer):
   class Meta:
      model = siteAdminModel
      fields = ('id','restaurantName','restaurantDescription','restaurantType','restaurantImage','restaurantLocation','restaurantRate','restaurantRateNumber',)

# register restaurant admin
class RestaurantAdminLoginSerializer(serializers.ModelSerializer):
   class Meta:
      model = siteAdminModel
      fields = ('restaurantUsername','restaurantPassword',)

# register restaurant admin
class RestaurantRateSerializer(serializers.ModelSerializer):
   class Meta:
      model = siteAdminModel
      fields = ('restaurantRate','restaurantRateNumber')


# creating a new restaurant
class siteAdminModelSerializer(serializers.ModelSerializer):
   class Meta:
      model = siteAdminModel
      fields = '__all__'