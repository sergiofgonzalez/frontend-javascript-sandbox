# 00 &mdash; Koa based project template
> Koa based project template for serving static content.

## Description
Simple project template for serving static content using Koa HTTP server framework.

The project includes dependencies with the custom `config` module (not yet published) and the minimalist `zeptolog`.

The configuration for the application is led by the `application.yml` file and includes the following keys:
+ `logger.level` &mdash; the logging level for the Koa server
+ `server.port` &mdash; the port on which the static content is published
+ `server.public` &mdash; the directory that contains the static content
  
The Koa server uses *NPM* as the task runner. These are the most relevant tasks:
+ `start` &mdash; starts the server
+ `dev` &mdash; enables continuous development mode using `nodemon` on the application sources
