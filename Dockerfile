# docker image define; node: v18
FROM node:18

# set working directory
WORKDIR /app

# copy package file to working dir
COPY package.json .

# run command: yarn
RUN yarn

# install package: for project deployment
RUN yarn global add serve

# copy build dir files to working dir
COPY ./build/* .

# open port
EXPOSE 5000

# CMD [ "pm2", "logs", "Runner_Analyzer_API" ]
CMD ["serve", "-s", "build"]