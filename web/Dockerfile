#build stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY . .

COPY ./.env.production ./.env

RUN yarn

RUN yarn build

EXPOSE 4173
CMD [ "yarn", "preview" ]