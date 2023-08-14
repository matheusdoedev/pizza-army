#build stage
FROM node:18-alpine AS build

WORKDIR /usr/app
COPY package.json tsconfig.json ./

RUN yarn

RUN yarn build

COPY . .

EXPOSE 3333
CMD ["yarn", "start:prod"]