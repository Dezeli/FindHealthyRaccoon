from django.shortcuts import render
from .models import User

# Create your views here.

def index(request):
    user_datas = User.objects.order_by("score")
    context = {"User_data": user_datas}
    return render(request, "game/index.html", context)