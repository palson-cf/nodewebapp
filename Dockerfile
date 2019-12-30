# specify the node base image with your desired version node:<version>
FROM node:10
# replace this with your application's default port
COPY server.js .
EXPOSE 80
CMD node server.js