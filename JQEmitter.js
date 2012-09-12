/**
 * JQEmitter.js
 * ==========
 * https://github.com/bengourley/gallery
 * Licenced under the New BSD License
*/
(function () {

module.exports = JQEmitter

/*
 * Constructor for objects
 * that inherit jQuery's
 * event methods.
 *
 * JQEmitter instances are designed to
 * be inherited like so:
 *
 *  function MyObj() {
 *    ...
 *  }
 *
 *  MyObj.prototype = new JQEmitter()
 *
 *  var o = new MyObj()
 *  o.on('foo', function () { ... })
 *  o.trigger('foo')
 *  etc...
 */
function JQEmitter() {}

JQEmitter.prototype.on = function () {
  $.fn.on.apply($(this), arguments)
  return this
}

JQEmitter.prototype.off = function () {
  $.fn.off.apply($(this), arguments)
  return this
}

JQEmitter.prototype.one = function () {
  $.fn.one.apply($(this), arguments)
  return this
}

JQEmitter.prototype.trigger = function () {
  $.fn.trigger.apply($(this), arguments)
  return this
}

if (window.module && window.require) {
  module('JQEmitter', function (module) {
    module.exports = JQEmitter
  })
} else {
  window.JQEmitter = JQEmitter
}

}())