import os
APPDIR = os.path.dirname (os.path.abspath (__file__))
ROOTDIR = os.path.join (APPDIR, "..")

DEBUG = os.path.exists ("/")
TEMPLATE_DEBUG = DEBUG

ROOT_URLCONF = "ap.urls"

TEMPLATE_LOADERS = [
	"ap.misc.VersionTemplateLoader",
	"django.template.loaders.filesystem.Loader",
]

TEMPLATE_DIRS = [
	os.path.join (ROOTDIR, "templates"),
]

TEMPLATE_CONTEXT_PROCESSORS = [
	"ap.misc.FacebookLikeBoxURLContextProcessor"
]
