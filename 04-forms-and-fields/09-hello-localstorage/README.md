# 09 &mdash; Hello `localStorage`
> interacting with `<input type="file">` fields

## Description

You can use `localStorage` to store string data that survive page reloads.
The interface is simple:
+ `setItem` &mdash; sets a value in the `localStorage`.
+ `removeItem` &mdash; removes an item from the `localStorage`.
+ `getItem` &mdash; reads an item from the `localStorage`.

If the user clears their local data, the values in the `localStorage` would be lost.

Sites from different domains get different storage compartments.

Browsers enforce a limit on the size of the data a site can be store in `localStorage` (typically a few MBs).

In the example, a simplistic *notes-taking* application that survives closing the browser is implemented.