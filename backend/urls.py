"""react URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include, re_path
from .views import index
from rest_framework_simplejwt.views import TokenRefreshView
from Login.views import MyObtainTokenPairView


urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('build/', include("django.contrib.auth.urls")),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/obtain/', MyObtainTokenPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/user/', include('Login.urls')),
    path('api/blog/', include('blog.urls')),
]
