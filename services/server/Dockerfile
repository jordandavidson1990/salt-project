FROM node:8

<<<<<<< HEAD
WORKDIR /usr/src/salt-app/
=======
WORKDIR /usr/src/salt_server/
>>>>>>> docker

# copy <src> <dest> where src is host and dest is container
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
