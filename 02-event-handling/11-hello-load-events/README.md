# 11 &mdash; Hello Load Events!
> handling `load` and `beforeunload` events

## Description

The `load` event fires on the window and document body objects. This is often useful to schedule initalization actions that require the whole document to have been built.

Elements such as `<img>` and `<script>` tags that load an external file fire a `load` event the file they reference is loaded. 

The `load` event is not propagated from child to parent.

When a page is closed or navigated away from, a `beforeunload` event is fired. This can be used to warn the user before closing a document. Preventing a page from closing is done by returning a string from the `beforeunload` callback;

