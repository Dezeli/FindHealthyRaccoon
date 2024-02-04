import json
from django.http import JsonResponse
from django.shortcuts import render
from .models import User

# Create your views here.

def index(request):
    user_datas = User.objects.all().order_by("-score")[:10]
    context = {"User_data": user_datas}
    return render(request, "game/index.html", context)


def save(request):
    jsonObject = json.loads(request.body)
    name = jsonObject.get('name')
    score = jsonObject.get('score')
    add_list = User(
        name=name, score=score
    )
    add_list.save()
    return JsonResponse(jsonObject)