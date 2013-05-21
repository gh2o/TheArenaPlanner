import os
import re
import urllib

from django import template
from django.template import loader
from django.conf import settings

class VersionTemplateLoader (loader.BaseLoader):
	
	path_regex = re.compile (r'^version:(\d+)/(.*)$')
	is_usable = True
	
	def load_template_source (self, template_name, template_dirs=None):
	
		match = self.path_regex.match (template_name)
		if not match:
			raise template.TemplateDoesNotExist ("Invalid path for template.")
		
		path = os.path.join (settings.ROOTDIR, "versions", match.group (1), match.group (2))
		try:
			with open (path) as file:
				return (file.read ().decode (settings.FILE_CHARSET), path)
		except IOError:
			raise template.TemplateDoesNotExist ("Template not found.")

class FacebookLikeBoxURLContextProcessor (object):

	def __new__ (cls, request):
	
		return {
			"fb_likebox_url": "//www.facebook.com/plugins/likebox.php",
			"fb_likebox_params": urllib.urlencode ({
				"width": "275",
				"height": "70",
				"header": "true",
				"stream": "false",
				"show_faces": "false",
			})
		}
