// Usage:
// Depend on "EventEmitterService"
// Then add "$ev" in your controller dependencies
//
// API is very simple:
// * $ev.on('event:name', function (paramsâ€¦) { â€¦ })
// * $ev.emit('event:name', paramsâ€¦)
// * $ev.off('event:name' [, handler])
//
// jQuery is required if you want to pass parameters when emitting
// events. And you might want to :)
// Angular's jqLite will emit event, but won't include data.
//
// Yes, the jQuery DOM Event is lost in the process, this is NOT
// what we want to manipulate here, this service is NOT intended
// to be used for DOM events.
angular
  .module('EventEmitterService', [])
  .factory('$ev', function () {
    // Create a DOM element to handle events transport for us
    // Note: jQuery required to emit() additional data along with event name
    var $e = (typeof jQuery !== 'undefined' ? jQuery : angular.element)('<div/>');

    // Cache generated handler so "off" can work
    var handlers = {};
    // Get or generate a handler and keep reference to original function
    var getHandler = function (eventType, original, generate) {
      if (!handlers[eventType]) {
        handlers[eventType] = [];
      }
      var evHandlers = handlers[eventType];
      for (var i=0; i<evHandlers.length; i++) {
        if (evHandlers[i][0] === original) return evHandlers[i][1];
      }
      // not found
      if (generate) {
        var handler = function () {
          // Call handler without first parameter (the jQuery event)
          original.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        handler._index = evHandlers.push([original, handler]);
        return handler;
      }
    };
    // Remove kept references (free memory along with off())
    var removeHandlers = function (eventType, handler) {
      if (!original) {
        // Remove all handlers for this type
        delete handlers[eventType];
      } else if (handlers[eventType] && handler && !isNaN(handler._index)) {
        // Remove only the bound handler
        handlers[eventType].splice(handler._index);
        if (!handlers[eventType].length) delete handlers[eventType];
      }
    };

    // Public API:
    return {

      // on(eventType, handler)
      "on": function (eventType, handler) {
        $e.bind(eventType, getHandler(eventType, handler, true));
        return this;
      },

      // emit(eventType [, paramsâ€¦])
      "emit": function (eventType) {
        var params = Array.prototype.slice.call(arguments, 1);
        $e.triggerHandler(eventType, params);
        return this;
      },

      // off(eventType[, handler])
      "off": function (eventType, handler) {
        if (handler) {
          var boundHandler = getHandler(handler, false);
          removeHandlers(eventType, boundHandler);
          $e.unbind(eventType, boundHandler);
        } else {
          $e.unbind(eventType);
        }
        return this;
      }
    };
  });