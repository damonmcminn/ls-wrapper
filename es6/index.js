import {install} from 'source-map-support';
install();

export default function Wrapper(prefix) {

  return {

    get: (name) => {
      let key = prefix ? `${prefix}.${name}` : name;
      let {val} = JSON.parse(localStorage.getItem(key)) || {};
      return val;
    },

    set: (name, data) => {
      let key = prefix ? `${prefix}.${name}` : name;
      let val = JSON.stringify({val: data});
      return localStorage.setItem(key, val);
    }

  }

}
