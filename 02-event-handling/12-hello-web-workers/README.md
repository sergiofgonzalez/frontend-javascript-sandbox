# 12 &mdash; Hello Web Workers!
> introduction to web workers

## Description

As JavaScript is single-threaded, no two scripts in a single document ever run at the same time. Therefore, if a script is already executing, event handlers and pieces of code scheduled in other ways will have to wait and the document will freeze.

For cases in which you need to do some background processing without freezing the page, browsers provide something called web workers &mdash; isolated JavaScript environments that runs alongside the main program for a document and can communicate with it via a simple messaging protocol.

In order to instantiate and send tasks to a worker you do:
```javascript
const worker = new Worker("js/worker.js");

worker.postMessage(5);

worker.addEventListener("message", evt => {
  console.log(`The worker has responded: ${ evt.data }`);
});
```

Then, the worker simply needs to define the handler for the `message` event:
```javascript
addEventListener("message", evt => {
  ...
  console.log(evt.data);
  ...
});
```