#!/bin/sh

find -name '*.txt' -type f -print0 | xargs -0 -L1 recode gbk..utf8
find -name '*htm*' -type f -exec fgrep -q  -i charset=gb '{}'  \;  -print0 | xargs -0 -L1 recode gbk..utf8
find -name '*htm*' -type f -exec fgrep -q  -i charset=gb '{}'  \;  -print0 | xargs -0 -L1 sed -i -e 's/charset=..2312/charset=utf-8/g'
