#!/bin/sh

if diff tmp/bower.json bower.json >/dev/null ; then
  echo bower.json is up to date #green
else
  echo bower.json has change, updating... #yellow
  bower update
  test -d "tmp" || mkdir -p "tmp" && cp bower.json tmp/bower.json
fi

if diff tmp/package.json package.json >/dev/null ; then
  echo package.json is up to date #green
else
  echo package.json has change, updating... #yellow
  sudo npm install
  test -d "tmp" || mkdir -p "tmp" && cp package.json tmp/package.json
fi

if diff tmp/setup.sh setup.sh >/dev/null ; then
  echo setup.sh is up to date #green
else
  echo setup.sh has change, updating... #yellow
  sudo sh setup.sh
  test -d "tmp" || mkdir -p "tmp" && cp setup.sh tmp/setup.sh
fi