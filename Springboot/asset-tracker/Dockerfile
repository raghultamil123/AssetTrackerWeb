FROM maven:3.8.1-openjdk as build
WORKDIR /app/asset
ADD pom.xml /app/asset
RUN ["/usr/local/bin/mvn-entrypoint.sh", "mvn", "verify", "clean", "--fail-never"]
COPY . .
RUN ["mvn", "package","-DskipTests"]

FROM openjdk:8
EXPOSE 8080
COPY --from=build /app/asset/target/*.jar assetapp.jar
CMD ["java" ,"-jar","assetapp.jar"]
