FROM node:latest

RUN mkdir -p /usr/src/freebies-app

WORKDIR /usr/src/freebies-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4100

CMD ["npm", "start"]