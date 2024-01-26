from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Orders, Reservations
from authenticate.models import UserModel
from .serializer import OrdersSerializer, ReservationsSerializer
from drf_yasg.utils import swagger_auto_schema

@swagger_auto_schema(
    method='GET'
)
@api_view(["GET"])
def order_list_view(request):
    # Get all orders
    orders = Orders.objects.all()
    serializer = OrdersSerializer(orders, many=True)
    return Response(serializer.data)

@swagger_auto_schema(
    method='POST',
    request_body=OrdersSerializer,
)
@api_view(["POST"])
def order_create_view(request):
    # Authenticate user based on email
    user_email = request.data.get('userEmail')
    user = get_object_or_404(UserModel, email=user_email)
    print(";;;;")

    # Create order
    request.data['userEmail'] = user.email  # Update userEmail with authenticated user's email
    serializer = OrdersSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@swagger_auto_schema(
    method='GET'
)
@api_view(["GET"])
def reservation_list_view(request):
    # Get all reservations
    reservations = Reservations.objects.all()
    serializer = ReservationsSerializer(reservations, many=True)
    return Response(serializer.data)

@swagger_auto_schema(
    method='POST',
    request_body=ReservationsSerializer,
)
@api_view(["POST"])
def reservation_create_view(request):
    # Authenticate user based on email
    user_email = request.data.get('userEmail')
    user = get_object_or_404(UserModel, email=user_email)

    # Create reservation
    request.data['userEmail'] = user.email  # Update userEmail with authenticated user's email
    serializer = ReservationsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
