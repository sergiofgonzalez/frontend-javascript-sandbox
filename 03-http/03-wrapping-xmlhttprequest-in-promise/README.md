# 03 &mdash; Wrapping XMLHttpRequest in Promises
> abstracting async XMLHttpRequests by promisifying them.

## Description

A simplistic illustration of how you can wrap an `XMLHttpRequest` in a *promise* to prevent having to use such a large amount of boilerplate code each time you want to shoot HTTP request from your frontend JavaScript code.

The code is not without flaws, but serves the purpose of demonstrating several concepts such as:
+ error handling using exceptions
+ async await
+ sending body information for POST requests
+ sending queryString information for GET requests

Note that the handling of content type, and some other aspects is hardcoded for demonstration purposes.