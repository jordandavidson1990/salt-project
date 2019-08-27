FROM node:8

WORKDIR /usr/src/salt_server/

# copy <src> <dest> where src is host and dest is container
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
