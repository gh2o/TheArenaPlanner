from django import http
from django.template import loader, RequestContext, TemplateDoesNotExist

def render (request, template_name, **dictionary):
	return http.HttpResponse (
		loader.render_to_string (
			template_name=template_name,
			dictionary=dictionary,
			context_instance=RequestContext (request)
		)
	)
