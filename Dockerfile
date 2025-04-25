FROM node:18-alpine as base

WORKDIR /home/node/app
COPY package.json ./
RUN npm install -g npm-check-updates --registry=https://registry.npmmirror.com
RUN ncu -u
RUN npm install --registry=https://registry.npmmirror.com
COPY . ./

FROM base as production

ENV NODE_PATH=./build
RUN npm run build
