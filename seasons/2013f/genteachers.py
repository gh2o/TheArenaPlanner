#!/usr/bin/python2

import glob
import csv

teachers = set ()

for fl in glob.glob ('csv/*.csv'):
	for row in csv.reader (open (fl)):
		if not any (row):
			continue
		assert all (row)
		assert len (row) == 6
		teachers.add (row[5])

for teacher in sorted (teachers):
	print '"%s"' % teacher
