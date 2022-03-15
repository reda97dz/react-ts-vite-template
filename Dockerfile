FROM node:16-alpine

# set working directory
RUN mkdir /usr/app
WORKDIR /usr/app

# copy package.json to working directory
COPY ./package.json .

# install and cache app dependencies
RUN npm install

# copy rest of code
COPY . .

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

EXPOSE 3000

CMD ["npm", "run", "dev"]