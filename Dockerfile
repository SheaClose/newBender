from nginx:alpine
copy ./dist /usr/share/nginx/html
COPY ./dist/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf