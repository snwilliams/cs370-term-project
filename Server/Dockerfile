FROM maven:latest AS base

COPY src src
COPY pom.xml pom.xml

RUN mvn clean && mvn package
