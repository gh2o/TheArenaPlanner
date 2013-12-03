#!/usr/bin/env python2

from parser import get_entries

def dump_teachers():
    teachers = sorted(set(entry.staff for entry in get_entries()))
    for teacher in teachers:
        print(teacher)

if __name__ == '__main__':
    dump_teachers()
