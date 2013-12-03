#!/usr/bin/env python2

import json
import csv

def dump_ratings():
	out = {}
	rd = csv.reader(open('ratings.csv'))
	for teacher, score in rd:
		score = float(score)
		out[teacher] = score
	print('/* ratings from www.ratemyteachers.com, take with a grain of salt */')
	print('DB.ratings = {};'.format(json.dumps(out, indent=2)))

if __name__ == '__main__':
	dump_ratings()
