'use strict';

const wrapper = require('../es6');

describe('ls-wrapper', function() {

  beforeEach(function() {

    localStorage.clear();

  });

  it('should return an ls-wrapper object', function() {

    expect(wrapper().set).toBeDefined();
    expect(wrapper('prefix').set).toBeDefined();

  });

  describe('returned wrapper', function() {

    let ls = wrapper();
    let prefixed = wrapper('prefix');

    it('should set localStorage key/val as JSON string', function() {

      ls.set('foo', ['foo', 1, true]);
      expect(JSON.parse(localStorage.getItem('foo')).type).toBe('array');

      prefixed.set('bar', 'bar');
      expect(localStorage.getItem('prefix.bar')).toBe('{"val":"bar","type":"string"}');

    });

    it('#get should return parsed value', function() {

      ls.set('bar', 'bar');
      prefixed.set('bar', new Date(0));
      expect(ls.get('bar')).toBe('bar');
      expect(prefixed.get('bar').getTime()).toBe(0);

    });

  });

});
