'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Wrapper;
/*
import {install} from 'source-map-support';
install();
*/

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
    }

  };
}

module.exports = exports['default'];