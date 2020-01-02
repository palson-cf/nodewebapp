# specify the node base image with your desired version node:<version>
FROM node:10-alpine
# replace this with your application's default port
COPY server.js .
EXPOSE 8081
CMD node server.js
