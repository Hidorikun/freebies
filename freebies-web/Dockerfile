FROM node:16

RUN mkdir -p /usr/src/freebies-web

WORKDIR /usr/src/freebies-web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200
RUN chmod 775 /usr/src/freebies-web/node_modules/.bin/ng
RUN chmod 775 /usr/src/freebies-web/node_modules/.bin/ng.cmd

CMD ["npm", "start"]
