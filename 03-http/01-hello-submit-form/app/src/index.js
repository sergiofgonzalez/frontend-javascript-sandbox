"use strict";

const serve = require("koa-static");
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
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

router.post("/submit", async (ctx) => {
  const address = ctx.request.body.address; 
  const salary = ctx.request.body.salary;  
  logger.debug(`address=${ address }; salary=${ salary }`);
  ctx.body = await getView();
});


app
  .use(serve(config("server:public")))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());


logger.info(`HTTP server established on port ${ config("server:port") }`);
app.listen(config("server:port"));

function getView() {
  return new Promise((resolve, reject) => {
    fs.readFile(`${ __dirname }/views/submitted.html`, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html.toString("utf-8"));
      }
    });
  });
}