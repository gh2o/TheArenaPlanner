#!/usr/bin/python2

import sys
import csv

reader = csv.DictReader (open (sys.argv[1]))

items = list (reader)
for item in items:
	name = item['name']
	sepped = name.split (' ')
	fname = ' '.join (sepped[:-1])
	lname = sepped[-1]
	del item['name']
	item['fname'] = fname
	item['lname'] = lname

fns = [x for x in reader.fieldnames if x != 'name']
fns[0:0] = ['lname', 'fname']

writer = csv.DictWriter (sys.stdout, list (fns))
writer.writeheader ()
writer.writerows (items)
