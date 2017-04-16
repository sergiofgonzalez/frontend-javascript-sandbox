"use strict";

const util = require("util");
const serve = require("koa-static");
const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
const zeptolog = require("./lib/zeptolog");
const config = require("./lib/config");


const logger = zeptolog(config("logger:level"));
const app = new Koa();
const router = new Router();


/*
  X-Response-Time middleware
  calculates the time the request took and sets it in an HTTP header
*/
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set("X-Response-Time", `${ ms } msec`);
});

/*
  Logger
  displays some basic information for the current request
*/
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  logger.debug(`Method=${ ctx.method } URL=${ ctx.url } duration=${ ms } ms`);
});


/*
  Routes
*/

router.get("/info", (ctx) => {
  ctx.body = { name: "Jason", surname: "Isaacs" };
});

router.post("/info", ctx => {
  logger.debug(util.inspect(ctx.request.body));
  ctx.body = { message: `Hello to ${ ctx.request.body.name } ${ ctx.request.body.surname }` };
});

router.post("/login", ctx => {
  logger.debug(util.inspect(ctx.request.body));
  ctx.body = { message: `Hello to ${ ctx.request.body.email }` };
});

app
  .use(serve(config("server:public")))
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());


logger.info(`HTTP server established on port ${ config("server:port") }`);
app.listen(config("server:port"));
