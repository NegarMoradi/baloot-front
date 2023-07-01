# stage1 as builder
FROM node:16.10.0-alpine as builder

RUN npm install -g npm@8.11.0

RUN mkdir /react-ui

WORKDIR /react-ui

RUN npm install yarn
# copy the package.json to install dependencies
COPY package.json yarn.lock ./


# Install the dependencies and make the folder
RUN yarn install

COPY . .

# Build the project and copy the files
RUN yarn run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
