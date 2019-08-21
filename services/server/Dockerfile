FROM node:8

WORKDIR /usr/src/salt-app/

# copy <src> <dest> where src is host and dest is container
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
