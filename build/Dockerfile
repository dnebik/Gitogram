FROM node:14-alpine3.15 as builder

WORKDIR /app

ADD package.json ./

RUN npm i

ADD . .

RUN npm run build

FROM node:14-buster

ENV NODE_ENV=production

WORKDIR /app

RUN npm i -g serve

ADD package.json ./

COPY --from=builder ./app/node_modules ./node_modules/
COPY --from=builder ./app/dist ./dist/

EXPOSE 80

CMD ["serve", "-s", "/app/dist", "-l", "80"]
