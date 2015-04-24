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
      expect(localStorage.getItem('foo')).toBe('{"val":["foo",1,true]}');

      prefixed.set('bar', 'bar');
      expect(localStorage.getItem('prefix.bar')).toBe('{"val":"bar"}');

    });

    it('#get should return parsed value', function() {

      ls.set('bar', 'bar');
      prefixed.set('bar', true);
      expect(ls.get('bar')).toBe('bar');
      expect(prefixed.get('bar')).toBe(true);

    });

  });

});
