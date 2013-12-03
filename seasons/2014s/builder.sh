#!/bin/sh

cd "$(dirname "$0")"

echo 'var DB = {};'
echo ''
./parser.py
echo ''
echo 'DB.ratings = {};'
