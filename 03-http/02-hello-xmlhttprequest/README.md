# 02 &mdash; Introducing XMLHttpRequest to interact with the server
> basics of async `XMLHttpRequest`

## Description

`XMLHttpRequest` is the most basic API available in JavaScript to make HTTP requests.

To make a simple request, you have to create a request object using the XMLHttpRequest constructor and call its open and send method.
The constructor allows you to use sync request, but that is discouraged.

So typically you'd do:
```javascript
  const req = new XMLHttpRequest();
  req.open("GET", "example/data", true);
  req.addEventListener("load", () => {
    logger.insertln(`response=${ req.responseText }; status=${ req.status }; statusText=${ req.statusText }; Content-Type=${ req.getResponseHeader("Content-Type") }`);
  });
  req.send(null);
```

Note that:
+ The `open` method configures the request. URLs that don't start with a protocol name are relative, so they'll be interpreted as relative to the current document. When they start with `/`, they replace the current path, but not the server name. The open method allows a third optional parameter that make the request *async* when true (which is the default) or sync when false.
+ The `send` method executes the request. You can use `null` to make empty requests.
+ For async requests:
  + `req.responseText` &mdash; contains the request response
  + `req.status` &mdash; contains the HTTP status code
  + `req.statusText` &mdash; contains the human readable HTTP status code
  + `req.getResponseHeader(header)` &mdash; lets you read the response header
  + `req.setRequestHeader(header, val)` &mdash; lets you set the request header
  + `req.getAllResponseHeaders` &mdash; returns all response headers as a string, separated by CRLF
  + To retrieve the results you have to declare an event listener for the `"load"` event on the request. When the request has successfully completed, you will be able to read the results. 

For handling connection errors, requests also fire `"error"` events you can subscribe to, but take into account that those are only triggered for *networking errors*, so don't expect your error handler to be invoked for 4xx or 5xx HTTP status codes.

For further details, please refer to: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest