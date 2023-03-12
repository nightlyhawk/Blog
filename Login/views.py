from rest_framework import viewsets, generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import NewUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from .serializers import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer
    # renderer_classes = [TemplateHTMLRenderer]
    # template_name = 'index.html'


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'index.html'


class UserViewSet(viewsets.ModelViewSet):

    permission_classes = (IsAuthenticated, )
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'index.html'
    serializer_class = UserSerializer
    queryset = NewUser.objects.all()

    # def get(self, request):
    #     queryset = self.request.user
    #     return Response({'users': queryset})


# from rest_framework.response import Response
# from rest_framework.views import APIView

# class UserRetrieve(APIView):
#     renderer_classes = [TemplateHTMLRenderer]
#     template_name = 'index.html'

#     def get(self, request):
#         queryset = User.objects.all()
#         return Response({'users': queryset})
