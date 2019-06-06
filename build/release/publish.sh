#!/bin/bash

# git pull
git pull origin master
# npm install
# rm yarn.lock
# yarn install --registry=https://registry.npmjs.org
# build
yarn run build
# ADD commit
git add -A
git commit -m 'build: package'
git push origin master
# replace src/ __VERSION__
node ./build/release/replace-version.js
# publish
npm publish
# checkout src/index.js
git checkout src/index.js
git checkout dev
git rebase master
git push origin dev
git checkout master
