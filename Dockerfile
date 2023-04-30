# Naively Simple Node Dockerfile

FROM node

RUN mkdir -p /app/ && chown -R node:node /app

WORKDIR /app

COPY --chown=node:node . .

USER node

RUN npx next telemetry disable

RUN yarn install --frozen-lockfile

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]