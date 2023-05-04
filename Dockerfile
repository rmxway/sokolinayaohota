FROM node:20.0.0

RUN mkdir -p /app/ && chown -R node:node /app

WORKDIR /app

COPY --chown=node:node . .

USER node

RUN yarn install

RUN npx next telemetry disable

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]