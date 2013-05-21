#!/usr/bin/python2 -u

import os, sys
sys.path.append (os.path.join (os.path.dirname (os.path.abspath (__file__)), "lib"))
import codecs
sys.stdout = codecs.getwriter("utf-8")(sys.stdout)

import re
import lxml.html
import urllib, urllib2
import json
from pyquery import PyQuery as pq

urlopener = urllib2.build_opener (urllib2.HTTPCookieProcessor ())

parse_details_re = re.compile (r'(\w+):')
def parse_details (path):
	details = (
		pq (div) for div in 
			pq (url="http://www.ratemyteachers.com" + path)
				.find ("ul#rankings li")
	)
	data = {}
	for div in details:
		text = div.text ()
		if text.count (": ") != 1:
			continue
		key, value = text.split (": ")
		data[key.lower ()] = float (value) if "." in value else int (value)
	return data

def split_name (name, letter):
	if name.count (" ") == 0:
		return "", name
	parts = name.split (" ")
	for index, part in enumerate (parts):
		if index == 0:
			continue
		if part.startswith (letter):
			return " ".join (parts[:index]), " ".join (parts[index:])
	return parts[0], " ".join (parts[1:])

def retrieve_teachers_for_letter (letter):

	url = "http://www.ratemyteachers.com/person_filter"
	postdata = "person_filter=" + urllib.quote (json.dumps ({
		"id": "3519",
		"url": "/lowell-high-school/3519-s",
		"letter": letter,
		"dept": "",
		"order_by": "LastName",
		"order_dir": "ASC"
	}))
	urlopener.open (url, postdata).read ()
	
	url = "http://www.ratemyteachers.com/lowell-high-school/3519-s"
	
	rows = (
		pq (row) for row in 
		pq (urlopener.open (url).read ()).find ('section#content table.grid tr:not(.adRow)')
	)
	
	for row in rows:
		if len (row.find ("th")) > 0:
			continue
		name_elem = row.find ("span[itemprop=employees]")
		name = name_elem.text ()
		if not name:
			continue
		teacher_path = name_elem.parent ().attr ("href")
		teacher_path = teacher_path[teacher_path.find ("/", 1):-3] + "t"
		data = parse_details (teacher_path)
		if data.get ("total ratings", "0") < 10:
			continue
		rating = (data["overall clarity"] + data["overall helpfulness"] +
			0.5 * data["overall easiness"]) / 2.5
		first_name, last_name = split_name (name, letter)
		print "%-20s %-20s = %.2f" % (last_name, first_name, rating)

def main ():
	alphabet = [chr (x) for x in xrange (ord ('A'), ord ('Z') + 1)]
	for letter in alphabet:
		retrieve_teachers_for_letter (letter)

if __name__ == "__main__":
	main ()
