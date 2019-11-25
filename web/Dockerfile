# build environment
FROM node:12.2.0-alpine as build
WORKDIR /doggy-app
ENV PATH /doggy-app/node_modules/.bin:$PATH
COPY package.json /doggy-app/package.json
RUN yarn install --silent
RUN yarn add react-scripts@3.0.1 -g --silent

COPY . /doggy-app

RUN yarn build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /doggy-app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]