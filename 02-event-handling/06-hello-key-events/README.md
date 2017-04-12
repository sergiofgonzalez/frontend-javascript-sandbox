# 06 &mdash; Hello Key Events!
> using `event.preventDefault` to prevent triggering hardwired default actions

## Description

+ When a key is pressed the `keydown` event is fired. This will be subsequently fired if the key is pressed and held.
+ When a key is released the `keyup` event is fired
+ When a key is pressed and the key produces a character value the `keypress` event is fired.
+ The key that was pressed can be checked using `event.key`, which returns a string representing the key value of the key that was involved in the event.
+ Modifier keys generate key events like regular keys, but typically you'll be interested in inspecting whether they were used in combination with other keys. This can be done with `shiftKey`, `ctrlKey` and `metaKey` properties

