import {getType} from 'js-type-check';

export default function Wrapper(prefix) {

  return {

    get: (name) => {
      let key = prefix ? `${prefix}.${name}` : name;
      let {val, type} = JSON.parse(localStorage.getItem(key)) || {};
      return type === 'date' ? new Date(val) : val;
    },

    set: (name, data) => {
      let key = prefix ? `${prefix}.${name}` : name;
      let val = JSON.stringify({val: data, type: getType(data)});
      return localStorage.setItem(key, val);
    }

  }

}
