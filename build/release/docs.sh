#!/bin/bash
set -e
# git pull
git pull origin master
# build
npm run doc-demo:build
# ADD commit
cd docs/.vuepress/dist
git init
git remote set-url origin git@github.com:hezhengjie/ghost-ui-doc.git
git add -A
git commit -m 'build: docs'
git push -f git@github.com:hezhengjie/ghost-ui-doc.git master:gh-pages

cd -
