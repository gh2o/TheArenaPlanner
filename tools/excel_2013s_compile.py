#!/usr/bin/env python2

import re
import sys
import csv
import json
import itertools

class Class (object):
	mapping = {
		'cid': ('Course ID', int),
		'name': ('Course Title', str),
		'code': ('Code', str),
		'block': ('Block', int),
		'room': ('Room', str),
		'teacher': ('Instructor', str),
		'dept': ('Dept', str),
	}
	def __init__ (self, dic):
		for dst, (src, conv) in self.mapping.iteritems ():
			setattr (self, dst, conv (dic[src]))

indata = [Class (q) for q in csv.DictReader (open (sys.argv[1]))]

def fix_teacher_name (name):

	if any (x.islower () for x in name):
		return name

	out = []
	fs = True
	for char in name:
		if char.isalpha ():
			out.append ([char.lower (), char.upper ()][fs])
			fs = False
		else:
			out.append (char)
			fs = True
	return ''.join (out)

def sanity_check ():
	ctn = {}
	for row in indata:
		ctn[row.cid] = row.name
	for row in indata:
		if ctn[row.cid] != row.name:
			print >>sys.stderr, "warning: for id=%r: %r != %r" % (id, ctn[row.cid], row.name)

def write_header ():
	print "var DB = {};"
	print

def write_classes ():

	data = sorted (indata, key=lambda row: (row.dept, row.name, row.block, row.teacher))
	obj = {}

	for dept, deptrows in itertools.groupby (data, key=lambda row: row.dept):
		deptdic = obj[dept] = {}
		for cid, courserows in itertools.groupby (deptrows, key=lambda row: row.cid):
			courserows = list (courserows)
			if courserows[0].block > 8:
				continue
			deptdic[cid] = {
				'name': courserows[0].name,
				'code': {'A': 'A', 'B': 'BC', 'C': 'BC'}[courserows[0].code],
				'slots': [{
					'teacher': fix_teacher_name (row.teacher),
					'room': row.room,
					'mod': row.block - 1,
				} for row in courserows]
			}

	print '/* data generated from the announcer */'
	print '/* blocks start from 0, not 1 */'
	print 'DB.base = %s;' % json.dumps (obj, indent=2)
	print

def write_ratings ():

	obj = {}

	if len (sys.argv) > 2:
		for row in csv.reader (open (sys.argv[2])):
			if len (row) < 2:
				continue
			row = [q.strip () for q in row]
			if not all (row):
				continue
			obj[row[0]] = float (row[1])

	print '/* ratings from www.ratemyteachers.com, take with a grain of salt */'
	print 'DB.ratings = %s;' % json.dumps (obj, indent=2)
	print

def dump_teachers ():
	output = csv.writer (open ('teachers.dump.csv', 'w'))
	teachers = sorted (set (fix_teacher_name (row.teacher) for row in indata))
	output.writerows ([(teacher,) for teacher in teachers])

sanity_check ()
write_header ()
write_classes ()
write_ratings ()
dump_teachers ()
