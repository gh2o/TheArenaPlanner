#!/usr/bin/python2 -u

import re
import json
import csv
import os, sys

def main ():

	csvs = sys.argv[1]
	ratingcsv = sys.argv[2]
	
	cdb = {}
	codes = frozenset (["A", "BC"])
	
	for csvfile in os.listdir (csvs):
		section = csvfile[csvfile.index (" - ") + 3:csvfile.rindex(".")]
		reader = csv.reader (open (os.path.join (csvs, csvfile)))
		department = cdb[section] = {}
		
		slots = None
		klass = None
		
		for row in reader:
		
			if len (row) == 0:
				continue
				
			assert len (row) == 6
			
			if not any (row):
				continue
			
			assert all (row[0:3]) or not any (row[0:3])
			
			if row[0]:
			
				assert row[2] in codes
				
				slots = []
				klass = department[row[0]] = {
					"name": row[1],
					"code": row[2],
					"slots": slots,
				}
			
			slots.append ({
				"mod": int (row[3]) - 1, # base-0
				"room": row[4],
				"teacher": row[5],
			})
	
	ratings = {}
	for row in csv.reader (open (ratingcsv)):
		if len (row) != 2:
			continue
		if not row[1]:
			continue
		ratings[row[0]] = float (row[1])
	
	print "var DB = {};"
	print
	print "/* data generated from the announcer */"
	print "/* blocks start from 0, not 1 */"
	print "DB.base = %s;" % json.dumps (cdb, indent=2)
	print
	print "/* ratings from www.ratemyteachers.com, take with a grain of salt */"
	print "DB.ratings = %s;" % json.dumps (ratings, indent=2)

if __name__ == "__main__":
	main ()
