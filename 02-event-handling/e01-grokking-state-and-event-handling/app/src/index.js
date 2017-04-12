"use strict";

const serve = require("koa-static");
const Koa = require("koa");
const zeptolog = require("./lib/zeptolog");
const config = require("./lib/config");


const logger = zeptolog(config("logger:level"));
const app = new Koa();


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
  logger.debug(`Method=${ ctx.method } URL=${ ctx.url } duration: ${ ms } msec`);
});


app.use(serve(config("server:public")));


logger.info(`HTTP server established on port ${ config("server:port") }`);
app.listen(config("server:port"));