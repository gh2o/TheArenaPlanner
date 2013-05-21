#!/usr/bin/python2

import json
import glob
import csv

codemp = {
	'A': 'A',
	'B': 'BC',
	'C': 'BC',
}

# parse base data

base = {}

for fl in glob.glob ('csv/*.csv'):

	dept = base[fl[4:-4]] = {}

	for row in csv.reader (open (fl)):

		if not any (row):
			continue
		assert all (row)
		
		cid, name, code, block, room, teacher = row
		block = int (block)

		if cid not in dept:
			dept[cid] = {
				"name": name,
				"code": codemp[code],
				"slots": []
			}

		cls = dept[cid]
		assert cls['name'] == name
		assert cls['code'] == codemp[code]

		cls['slots'].append ({
			'mod': block - 1,
			'teacher': teacher,
			'room': room,
		})

# parse ratings

ratings = {}

for row in csv.reader (open ('teachers.csv')):
	
	if len (row) < 2:
		continue
	row = row[0:2]
	if not all (row):
		continue

	name, rating = row
	rating = float (rating)

	ratings[name] = rating

# output!

print """
var DB = {};

/* data generated from the announcer */
/* blocks start from 0, not 1 */
DB.base = %s;

/* ratings from www.ratemyteachers.com, take with a grain of salt */
DB.ratings = %s;
""".lstrip () % (json.dumps (base, indent=2), json.dumps (ratings, indent=2))
