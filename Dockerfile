# docker image define; node: v18
FROM node:18

# set working directory
WORKDIR /app

# copy package file to working dir
COPY package.json .

# run command: yarn
RUN yarn
RUN yarn global add serve
RUN yarn build

# copy all of current dir files to working dir
COPY . .

# open port
EXPOSE 3000

# start process
CMD [ "serve", "-s", "build" ]