FROM node:latest

RUN mkdir -p /usr/src/freebies-web

WORKDIR /usr/src/freebies-web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
