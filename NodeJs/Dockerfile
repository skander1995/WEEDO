# base image
FROM node:10.13.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
# add app
COPY . .

RUN npm install

# auto refresh
RUN npm install -g nodemon
RUN ls
EXPOSE 9000
CMD [ "nodemon","./index.js" ]
