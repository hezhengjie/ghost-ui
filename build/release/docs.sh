#!/bin/bash
set -e
# git pull
git pull origin master
# build
npm run doc-demo:build
# ADD commit
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'build: docs'
git push -f https://github.com/hezhengjie/ghost-ui-doc.git master

cd -
