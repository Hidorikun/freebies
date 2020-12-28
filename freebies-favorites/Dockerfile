FROM node:latest

RUN mkdir -p /usr/src/freebies-favorites

WORKDIR /usr/src/freebies-favorites

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4102

CMD ["npm", "start"]