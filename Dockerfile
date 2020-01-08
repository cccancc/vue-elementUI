FROM nginx:alpine

COPY _nginx/* /etc/nginx/conf.d/

COPY dist/* /usr/share/nginx/html/