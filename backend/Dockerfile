FROM node:14

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY /app/. .

RUN npx sequelize-cli db:migrate
RUN npx sequelize-cli db:seed:all

EXPOSE 3000

CMD ["npm", "start"]