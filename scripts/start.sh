#!/bin/bash

cd /www/gitee/ssr
yarn install
#nohup yarn start &
pm2 start index.js --name coin
