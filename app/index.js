import Mapper from './mapper';
console.log('mapper imported');
export default class Client {
  validate(props) {
    console.log('vaidate called');
    if (!props) {
      throw new Error('Options is required');
    }
    if (!props.API_KEY) {
      throw new Error('opts.API_KEY is required');
    }
  }
  constructor(props) {
    console.log('constructor called');
    this.validate(props);
    this.API_DOMAIN = 'https://api.custos.cloud/';
    this.mapper = new Mapper();
  }
}

console.log('post export');
console.log(Client);
