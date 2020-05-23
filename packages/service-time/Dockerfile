FROM node:12-alpine

ENV API_SERVER_PORT "3000"
ENV NODE_ENV "production"
ENV API_SERVER_NAME "service-time"

RUN mkdir app/
WORKDIR /app

# we add this here so docker can cache the layer
COPY package.json package.json
RUN npm install

COPY . .


LABEL maintainer="Gergo Bogdan" \
      version="0.5.0" \
      serviceName="service-time" \
      description="microservice for getting the current time in ISO format"

# CMD is different from RUN
CMD npm run start