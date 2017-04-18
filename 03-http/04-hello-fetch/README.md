# 04 &mdash; Introducing the Fetch API
> thew new `fetch` API as an better alternative to `XMLHttpRequest`

## Description

The new `fetch` function provides a better alternative to `XMLHttpRequest`:

Note that:
+ The *Promise* returned from `fetch` won't reject on HTTP error status. Instead, it will resolve normally with *ok status set to false*. It will only be rejected on network failure.
+ `fetch` won't send or receive any cookies.

In the example we illustrate several frontend use cases:
+ Submitting an HTTP GET request to retrieve an image and display it in the HTML document
+ Performing an empty HTTP GET and retrieving results from the server as JSON
+ Sending a JSON encoded HTTP POST and reading results as JSON
+ Sending Form Data using the `FormData` API. Note that i wasn't able to properly handle the information on the server side with koa2 (Hint: I'd need to use `multer` for that).

For further information, review:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch