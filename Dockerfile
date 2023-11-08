# Reference: https://velog.io/@chldppwls12

# base image: nginx (for deploying static react-built files)
FROM nginx

# expose port 3000
EXPOSE 3000

# copy nginx config file
COPY /publish/volumes/fe/fe.nginx.conf /etc/nginx/conf.d/default.conf

# copy deploy dir
COPY ./build /usr/share/nginx/html