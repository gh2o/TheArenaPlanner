from django.conf.urls.defaults import *

svpatterns = patterns ('ap.views',
	url (r'^$', 'main'),
	url (r'^print$', 'prints'),
)

urlpatterns = patterns ('ap.views',
	url (r'^(?P<version>\d+)/(?P<season>\w+)/', include (svpatterns)),
	url (r'^current$', 'current'),
	url (r'^$', 'current'),
)
