'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Wrapper;

var _getType = require('js-type-check');

function Wrapper(prefix) {

  return {

    get: function get(name) {
      var key = prefix ? '' + prefix + '.' + name : name;

      var _ref = JSON.parse(localStorage.getItem(key)) || {};

      var val = _ref.val;
      var type = _ref.type;

      return type === 'date' ? new Date(val) : val;
    },

    set: function set(name, data) {
      var key = prefix ? '' + prefix + '.' + name : name;
      var val = JSON.stringify({ val: data, type: _getType.getType(data) });
      return localStorage.setItem(key, val);
    },

    drop: function drop(name) {
      return localStorage.removeItem(prefix ? '' + prefix + '.' + name : name);
    }

  };
}

module.exports = exports['default'];