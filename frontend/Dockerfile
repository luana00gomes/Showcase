FROM node:latest

WORKDIR /frontend

COPY . .

RUN rm -rf node_modules
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000