import pick from 'lodash.pick';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Mapper {
  constructor(props) {
    Object.assign(this, props);
    this.API_ENDPOINT = `${this.API_DOMAIN}/mapper`;
  }
  add(opts) {
    return new Promise((fulfill, reject) => {
      if (!opts) return reject(new Error('opts is required'));
      const ALLOWED_FIELDS = [
        'ip',
        'label',
        'id',
      ];
      const body = pick(opts, ALLOWED_FIELDS);
      const REQUIRED_FIELDS = [
        'ip',
        'id',
      ];
      REQUIRED_FIELDS.forEach((field) => {
        if (!body[field]) return reject(new Error(`opts.${field} is required`));
      });
      fetch(`${this.API_ENDPOINT}/add`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': `Custos-JS-Client-${this.VERSION}`,
          'x-api-key': 'cQyv0BGJEe4rhPRhUn2c6ocEbW6ZG4H6P94Dw4Ng',
        },
        body: JSON.stringify(body),
      }).then((res) => fulfill(res));
    });
  }
  remove(opts) {
    return new Promise((fulfill, reject) => {

      if (!opts) return reject(new Error('opts is required'));
      const ALLOWED_FIELDS = [
        'id',
      ];
      const body = pick(opts, ALLOWED_FIELDS);
      const REQUIRED_FIELDS = [
        'id',
      ];
      REQUIRED_FIELDS.forEach((field) => {
        if (!body[field]) return reject(new Error(`opts.${field} is required`));
      });
      fetch(`${this.API_ENDPOINT}/remove`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': `Custos-JS-Client-${this.VERSION}`,
          'x-api-key': 'cQyv0BGJEe4rhPRhUn2c6ocEbW6ZG4H6P94Dw4Ng',
        },
        body: JSON.stringify(body),
      }).then((res) => fulfill(res));
    });
  }
}
