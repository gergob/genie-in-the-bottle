#/bin/sh

# -p stands for ports exposed port : docker app port
# -e stands for env variables

API_SERVER_PORT=8888

docker container run -it --rm --name service-auth -p $API_SERVER_PORT -e NODE_ENV=development -e API_SERVER_PORT=$API_SERVER_PORT -e API_SERVER_NAME=SERVICE-AUTH -v $PWD:/app service-auth