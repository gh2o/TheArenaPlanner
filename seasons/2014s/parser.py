#!/usr/bin/env python2

import json
from itertools import groupby
from collections import Counter

from pdfminer.pdfparser import PDFParser
from pdfminer.pdfdocument import PDFDocument
from pdfminer.pdfpage import PDFPage
from pdfminer.pdfinterp import PDFResourceManager
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.converter import PDFPageAggregator
from pdfminer.layout import LTChar

parser = PDFParser(open('announcer.pdf', 'rb'))
document = PDFDocument(parser)
document.initialize()

rsrcmgr = PDFResourceManager()
device = PDFPageAggregator(rsrcmgr)
interpreter = PDFPageInterpreter(rsrcmgr, device)

class Entry(object):

    KEYS = ('dept', 'sect', 'id', 'title', 'room', 'staff', 'space', 'block', 'code')

    def __init__(self, *row):
        self.__dict__.update(dict(zip(Entry.KEYS, row)))
        self.sect = int(self.sect)
        self.space = int(self.space)
        self.block = int(self.block)

    def __repr__(self):
        return 'Entry' + repr(tuple(self.__dict__[key] for key in Entry.KEYS))

def extract_text(c):
    t = c.get_text()
    if len(t) == 1:
        return t
    else:
        s = [x for x in t if ord(x) >= 32 and ord(x) <= 126]
        if len(s) != 1:
            raise ValueError('bad extraction')
        return s[0]

def extract_rows():
    for page in PDFPage.create_pages(document):
        interpreter.process_page(page)
        result = device.get_result()
        chars = [c for c in result if isinstance(c, LTChar)]
        for y0, linechars in groupby(chars, lambda c: round(c.y0)):
            columns = []
            for c in linechars:
                lastcol = columns[-1] if columns else None
                if (
                    lastcol is not None and 
                    c.x0 >= lastcol[-1].x0 + lastcol[-1].width / 2 and
                    c.x0 <= lastcol[-1].x1 + lastcol[-1].width / 2
                ):
                    # append to last column
                    lastcol.append(c)
                else:
                    # create a new column
                    columns.append([c])
            row = [u''.join(extract_text(c) for c in column) for column in columns]
            if len(row) == 9 and row[-1] != u'Code':
                yield row

def get_entries():
    for row in extract_rows():
        entry = Entry(*row)
        if entry.block >= 1 and entry.block <= 8:
            yield Entry(*row)

def dump_json():

    entries = get_entries()
    database = {}

    for deptname, deptentries in groupby(entries, lambda e: e.dept):

        dept = database[deptname] = {}

        for courseid, courseentries in groupby(deptentries, lambda e: e.id):

            courseentries = list(courseentries)

            codes = Counter({'A': 'A', 'B': 'BC', 'C': 'BC'}[x.code] for x in courseentries)
            titles = Counter(x.title for x in courseentries)
            code = sorted(codes.items(), key=lambda item: -item[1])[0][0]
            title = sorted(titles.items(), key=lambda item: -item[1])[0][0]

            course = dept[courseid] = {
                'name': title,
                'code': code,
            }

            slots = course['slots'] = []
            for entry in courseentries:
                slots.append({
                    'mod': entry.block - 1,
                    'teacher': entry.staff,
                    'room': entry.room,
                })

    print('/* data generated from the announcer */')
    print('/* blocks start from 0, not 1 */')
    print('DB.base = {};'.format(json.dumps(database, indent=2)))

dump_json()
