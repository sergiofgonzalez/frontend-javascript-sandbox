# 09 &mdash; Hello Scrolling!
> handling `scroll` event

## Description

Whenever an element is scrolled, a `scroll` event fires on it. This event can be useful to know what the user is currently looking at and maybe disabling content that is off-screen.

In the example, we draw a very simple progress bar that indicate the position of the client view.

We do that using:
```javascript
  const max = document.body.scrollHeight - innerHeight;
  const percent = (pageYOffset / max) * 100;
  bar.style.width = `${ percent }%`;
```

where:
+ `pageYOffset`/`scrollY` is the current vertical scroll value in pixels
+ `scrollHeight` is equal to the min height the element would require in order to fit all the content in the viewpoint without using a vertical scrollbar. In the example, `document.body.scrollHeight` is set to 2000 so that scrolling is allowed
+ `innerHeight` is the height of the window, so the value changes as the browser window is resized