# Freebies 

Web app that displays game giveaways you can take advantage of right now.

![freebies](https://user-images.githubusercontent.com/23582924/103232299-c7948280-4942-11eb-9833-01ca17e2e935.png)


# Installation

```sh
$ docker-compose up
```

# Architecture

Context Diagram

![context](https://user-images.githubusercontent.com/23582924/103279688-070cae80-49d7-11eb-9b2c-c4f3474044c6.png)

Container Diagram

![container](https://user-images.githubusercontent.com/23582924/103279692-08d67200-49d7-11eb-85bb-7fbaceda48d4.png)

Component Diagram

![component](https://user-images.githubusercontent.com/23582924/103279694-0a079f00-49d7-11eb-9383-90952af911e1.png)


SOA patterns

* API Gateway - Freebies App acts as an api gateway of the system, redirecting client calls to the microservices that are responsible for them.
* Database per service - Each microservice that requires a database has one, even if in this case only the favorites App does.
* Service instance per container - Each service instance is deployed in a separate docker container.



