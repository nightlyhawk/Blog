from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, RegisterView




router = DefaultRouter()
router.register('user', UserViewSet, basename='user')


urlpatterns = [
    path('', include(router.urls)),
    path('signup/', RegisterView.as_view(), name='auth_register'),
]




urlpatterns += router.urls