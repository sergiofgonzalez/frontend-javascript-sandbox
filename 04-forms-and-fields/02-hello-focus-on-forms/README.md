# 02 &mdash; Hello Focus on Forms
> exploring focus/blur related concepts

## Description

Form fields fire `focus` and `blur` events. Remember that those type of events do not propagate to their parents, so if you really need to track those on form fields you'll need to register event listeners for each one of them.

You can obtain the current element in focus by reading `document.activeElement`.

In form pages, if you want the user to interact with the form field immediately, use the `autofocus` attribute.
If you need to influence the order in which the fields receive focus you can use the `tabindex` attribute:
```html
  <input type="text" tabindex="1" autofocus>
  <input type="password" tabindex="3">
  <input type="text" tabindex="2">
</div>        
```