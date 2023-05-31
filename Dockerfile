FROM node:20-alpine

RUN mkdir -p /app/ && chown -R node:node /app

WORKDIR /app

COPY --chown=node:node . .

USER node

RUN yarn install

RUN yarn next telemetry disable

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]