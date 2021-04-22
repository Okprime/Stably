# This file gets the build folder in the stably-client directory and adds it to a new folder in the stably-server directory

FROM node:14 AS client

WORKDIR /app

COPY stably-client/package.*json .

RUN npm install

COPY stably-client .

RUN npm run build

FROM node:14 as base

WORKDIR /app

COPY stably-server/package.json .

RUN npm install -qy

COPY stably-server .

COPY --from=client app/build/ stably-client

RUN npm run build

CMD ["npm", "run", "start:staging"]

EXPOSE 4500
