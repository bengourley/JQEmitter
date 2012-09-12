JQEmitter
=======

A JavaScript prototype to mixin jQuery event methods onto your own objects.

# Example

```js
// Constructer for your
// own objects that you
// want to emit events
function MyEmitter() {
}

// Use a JQEmitter as your
// constructor's prototype
MyObj.prototype = new JQEmitter()

var o = new MyEmitter()
o.on('foo', function () { ... })
o.trigger('foo')
```

This prototype attaches jQuery's `$.fn.on`, `$.fn.off`, `$.fn.one`
and `$.fn.trigger` to itself as instance methods. The method
signatures and execution contexts remain the same
as [documented by jQuery](http://api.jquery.com/category/events/)

# Licence
Licenced under the [New BSD License](http://opensource.org/licenses/bsd-license.php)