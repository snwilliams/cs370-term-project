
FROM maven:latest As base

RUN mkdir -p /code
WORKDIR /code

#COPY cs370-term-project/app/package.json .
#RUN npm install

#EXPOSE 3000
#CMD [ "npm", "start" ]


COPY ./src ./src
COPY ./pom.xml ./pom.xml
COPY . .

RUN mvn clean && mvn package


