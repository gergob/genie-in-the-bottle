#/bin/sh

# -p stands for ports exposed port : docker app port
# -e stands for env variables

API_SERVER_PORT=8888

docker container run -it --rm --name service-time -p 3000:$API_SERVER_PORT -e NODE_ENV=production -e API_SERVER_PORT=$API_SERVER_PORT -e API_SERVER_NAME=CustomSERVICE service-time