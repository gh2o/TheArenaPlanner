#!/usr/bin/env python2

import re
import socket

def httplib_send (self, data):

	if self.sock is None:
		if self.auto_open:
			self.connect ()
		else:
			raise httplib.NotConnected ()

	if "\r\n" in data:
		index = data.index ("\r\n")
		first = data[:index]
		rest = data[index:]
		if re.search (r'HTTP/\d\.\d$', first):
			self.sock.setsockopt (socket.IPPROTO_TCP, socket.TCP_NODELAY, True)
			self.sock.sendall (first)
			self.sock.setsockopt (socket.IPPROTO_TCP, socket.TCP_NODELAY, False)
			self.sock.sendall (rest)
		else:
			self.sock.sendall (data)
	else:
		self.sock.sendall (data)

import httplib
httplib.HTTPConnection.send = httplib_send

import functools
import lxml.html
import urllib2
import urlparse
import sys
import multiprocessing as mp
from multiprocessing.pool import Pool

URL_BASE = "http://www.ratemyteachers.com"

def fetch_url (url):
	exc = None
	for attempt in xrange (10):
		try:
			return urllib2.urlopen (url, timeout=10)
		except IOError as e:
			exc = e
	print "error fetching %s" % url
	raise exc

def scrape_directory (path):
	tree = lxml.html.parse (fetch_url (urlparse.urljoin (URL_BASE, path)))
	ret = [(scrape_directory, [nex], {}, nex) for nex in
		tree.xpath ('//ul[@class="pagination"]//li[not(a)]/following-sibling::li[1]/a/@href')]
	for row in tree.xpath ('//ul[@class="sort_list"]//li[@class="name"]/a'):
		name, = row.xpath ('.//text()')
		name = name.strip ()
		href = row.attrib['href']
		ret.append ((scrape_teacher, [href, name], {}, href))
	return ret

def scrape_teacher (path, name, ratsum=0.0, ratlen=0):
	tree = lxml.html.parse (fetch_url (urlparse.urljoin (URL_BASE, path)))
	ratings = tree.xpath ('//div[@id="teacher_rating"]//meta[@itemprop="ratingValue"]//@content')
	assert len (ratings) % 3 == 0
	ratsum += sum (float (x) for x in ratings[1::3] + ratings[2::3])
	ratlen += len (ratings) * 2 / 3

	ret = [(scrape_teacher, [nex, name, ratsum, ratlen], {}, nex) for nex in
		tree.xpath ('//ul[@class="pagination"]//li[not(a)]/following-sibling::li[1]/a/@href')]

	match = re.search (r'(\d+)$', path)
	if match:
		page = int (match.group (1))
	else:
		page = 1

	if ret:
		print "scraped %r (page %d)" % (name, page)
		return ret
	elif ratlen:
		print "finished %r (page %d)" % (name, page)
		return [{'name': name.encode ('utf-8'), 'rating': ratsum / ratlen, 'count': ratlen}]
	else:
		return []

	'''
	if nexes:
		print "scraped %r" % name
		return [(scrape_teacher, [nexes[0], name, ratsum, ratlen], {}, href)]
	elif ratlen:
		print "finished %r" % name
		return [{'name': name, 'rating': ratsum / ratlen}]
	else:
		return []
	'''


def do_apply (tup):
	func, args, kwargs = tup[0:3]
	return func (*args, **kwargs)

class ExcPoolWrapper (object):

	def __init__ (self, func):
		self.__func = func
	
	def __call__ (self, *args, **kwargs):
		try:
			return self.__func (*args, **kwargs)
		except:
			import traceback
			traceback.print_exc ()
			raise

class ExcPool (Pool):
	def map_async (self, func, *args, **kwargs):
		return super (ExcPool, self).map_async (ExcPoolWrapper (func), *args, **kwargs)
	def apply_async (self, func, *args, **kwargs):
		return super (ExcPool, self).apply_async (ExcPoolWrapper (func), *args, **kwargs)

pool = ExcPool (processes=10)

queue = [(scrape_directory, ['/lowell-high-school/3519-s'], {})]
results = []

while queue:

	print 'queue size: %d' % len (queue)

	newqueue = []
	for items in pool.map (do_apply, queue):
		newqueue.extend (items)
	queue = newqueue

	results.extend (x for x in queue if isinstance (x, dict))
	queue = [x for x in queue if isinstance (x, tuple)]

pool.close ()
pool.join ()

import csv
writer = csv.DictWriter (open ('ratings.dump.csv', 'w'), ['name', 'rating', 'count'])
writer.writeheader ()
writer.writerows (results)
