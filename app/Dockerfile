FROM node:14.15.0

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm install


CMD ["npm", "start"]

COPY . .
