'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Wrapper;

var _install = require('source-map-support');

_install.install();

function Wrapper(prefix) {

  return {

    get: function get(name) {
      var key = prefix ? '' + prefix + '.' + name : name;

      var _ref = JSON.parse(localStorage.getItem(key)) || {};

      var val = _ref.val;

      return val;
    },

    set: function set(name, data) {
      var key = prefix ? '' + prefix + '.' + name : name;
      var val = JSON.stringify({ val: data });
      return localStorage.setItem(key, val);
    }

  };
}

module.exports = exports['default'];
//# sourceMappingURL=index.js.map