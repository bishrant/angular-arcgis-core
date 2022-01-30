#stage 1 compile and build angular

FROM mhart/alpine-node:14 as build

#set working directory
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.13-alpine

COPY --from=build /app/dist/angular-arcgis-core /usr/share/nginx/html

EXPOSE 80