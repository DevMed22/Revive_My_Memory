from django.views.generic import CreateView
from django.urls import reverse_lazy
from .forms import SignUpForm
from .models import Profile



class SignUpView(CreateView):
    model = Profile
    form_class = SignUpForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'