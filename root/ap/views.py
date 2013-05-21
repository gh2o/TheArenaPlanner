import json
import os
from django import http
from django.conf import settings
from django.template import TemplateDoesNotExist
from . import utils

seasons = {
	"f": "Fall",
	"s": "Spring",
}

def current (request):
	with open (os.path.join (settings.ROOTDIR, "current.txt")) as fd:
		return http.HttpResponseRedirect (fd.read ().strip ())

def main (request, version, season):

	season_root = os.path.join (settings.ROOTDIR, "seasons", season)
	if not os.path.exists (season_root):
		raise http.Http404
	
	fb_page_url = None
	fb_page_url_path = os.path.join (season_root, "fburl.txt")
	if os.path.exists (fb_page_url_path):
		with open (fb_page_url_path) as fd:
			fb_page_url = fd.read ().strip ()

	iversion = int (version)
	try:
		return utils.render (
			request,
			"version:%s/template.html" % version,
			title="The Arena Planner: %s %s, Version %d" % (
				seasons.get (season[4], "Year"),
				season[0:4],
				iversion,
			),
			version=version,
			season=season,
			fb_page_url=fb_page_url
		)
	except TemplateDoesNotExist:
		raise http.Http404

def prints (request, version, season):
	
	try:
		return utils.render (
			request,
			"version:%s/print.html" % version,
			version=version,
		)
	except TemplateDoesNotExist:
		raise http.Http404
