FROM node:latest

RUN mkdir -p /usr/src/freebies-search

WORKDIR /usr/src/freebies-search

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4101

CMD ["npm", "start"]