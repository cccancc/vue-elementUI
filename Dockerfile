FROM nginx:alpine

COPY dist/index.html /usr/share/nginx/html/
ADD dist/static /usr/share/nginx/html/

#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]
