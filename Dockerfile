FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i --production

RUN npm run build




## Reference
# https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a
