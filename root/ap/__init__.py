import os
os.environ["DJANGO_SETTINGS_MODULE"] = "ap.settings"

from django.core.handlers.wsgi import WSGIHandler
application = WSGIHandler ()
