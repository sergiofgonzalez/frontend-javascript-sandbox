# 01 &mdash; Interacting with a Server using a Form
> sending a simple HTTP GET and POST requests using a `<form>`

## Description

HTML pages can include forms, which allow the user to fill out information and send it to the server. When you click a *submit* button, the information in the form fields will be encoded into a query string.

When the `<form>` element's method is `GET` (which is the default), the query string is included in the action URL and the browser makes a `GET` request to the URL.

In the following example:
```html
<!DOCTYPE html>
<html>
...
  <form method="GET" action="submitted.html">
    <input type="text" id="fullName" name="fullName">
    <input type="text" id="age" name="age">
    <button type="submit">Send</button>              
  </form>
...
</html>
```

When the user clicks on the `<button>` the following HTTP request will be triggered:
```
GET /submitted.html?fullName=name&age=1234
```

The `method` attribute can also trigger an HTTP POST, and the information will then be encoded in the body.

Note that:
+ `GET` &mdash; should be used for requests that do not have side-effects.
+ `POST` &mdash; should be used for requests that change something on the server side.

On the server side, to handle the `POST` request we define a route and return an HTML document from the server.

```javascript
router.post("/submit", async (ctx) => {
  const address = ctx.request.body.address; 
  const salary = ctx.request.body.salary;  
  logger.debug(`address=${ address }; salary=${ salary }`);
  ctx.body = await getView();
});
```