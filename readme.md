## mithril-classnames

Adds function `classnames` to `m` object. Intended to be used with mithril.

Allows for an array-like syntax to generate a class string for vnode objects.

```js
m("div", {
    class : m.classnames(
        "someClass",
        [ state.isSuccessful, "successful" ], // `.succesfful` only added to object if `state.isSuccessful === true`
        [ state.isActive, "active", "inactive" ] // works like a ternary, if `state.isActive === true` then `.active` is used, otherwise `.inactive`
        // no other cases currently handled or supported
    )
});
```
