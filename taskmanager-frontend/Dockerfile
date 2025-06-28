FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
RUN apk add --no-cache gettext
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/config.js.template /usr/share/nginx/html/config/config.js.template
EXPOSE 80
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/config/config.js.template > /usr/share/nginx/html/config/config.js && nginx -g 'daemon off;'"]