FROM node:latest

WORKDIR /

COPY package*.json ./

RUN npm install 

COPY . .

# COPY ./dist ./dist

EXPOSE 8000

CMD node ./dist/server.js