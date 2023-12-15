FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} p.jar
ENTRYPOINT ["java","-jar","/p.jar"]