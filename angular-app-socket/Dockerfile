# The builder from node image
FROM node:12.15.0 as build

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# Move our files into directory name "app"
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.3.14

COPY . /app

# generate build
RUN ng build --configuration=docker --aot --outputHashing=all --output-path=dist
# Build a small nginx image with static website
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/app.conf /etc/nginx/conf.d/default.conf


# expose port 8001
EXPOSE 8001
CMD ["nginx", "-g", "daemon off;"]

