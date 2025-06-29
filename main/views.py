from django.shortcuts import render

def home(request):
    hero_images = [f'images/TCAI/IMG-20250628-WA0{i}.jpg' for i in range(79, 108)]
    return render(request, 'index.html', {'hero_images': hero_images})
