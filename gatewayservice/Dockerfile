FROM node:21-alpine AS build

WORKDIR /usr/src/app/

COPY ./gatewayservice/package*.json ./

RUN apk add --no-cache python3 make g++ && npm ci --omit=dev

# -----------------------------------------------------------------------------

FROM node:21-alpine

USER node
WORKDIR /usr/src/app/
ENV NODE_ENV production

COPY --chown=node:node --from=build /usr/src/app/node_modules/ ./node_modules/
COPY ./gatewayservice/ ./

EXPOSE ${GATEWAY_SERVICE_PORT}
ENTRYPOINT [ "npm", "run", "start" ]