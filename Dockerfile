FROM nginx:alpine

COPY _nginx/default.conf /etc/nginx/conf.d/
COPY dist/index.html /usr/share/nginx/html/
ADD dist/static /usr/share/nginx/html/

#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]
