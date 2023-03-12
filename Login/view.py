from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.
@ensure_csrf_cookie
def login_view(request):
    if request.method == "POST":
       username = request.POST.get("email")
       password = request.POST.get("pass")

       user = authenticate(request, username=username, password=password)
       if user is None:
          context = {"error":"email or password is invalid"}
          return render(request, "index.html", context)
       login(request, user)
       return redirect('/admin')
 
    return render(request, "index.html", {})