FROM node:8.12.0

#Create  app and change as working Directory
RUN mkdir -p /app
WORKDIR /app

# Copy package.json into container app folder
COPY package.json package-lock.json* ./

RUN apt-get update && \
 apt-get install -y && \
 apt-get install -y vim  build-essential libpq-dev && \
 npm i npm@latest -g && \
 npm update && \
 npm install @angular/cli -g && \
 npm install && \
 npm cache clean --force
 
RUN yarn install

COPY . ./

EXPOSE 4200 49153