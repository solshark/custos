// import Mapper from './mapper';

export default class Client {
  validate(props) {
    if (!props) {
      throw new Error('Options is required');
    }
    if (!props.API_KEY) {
      throw new Error('opts.API_KEY is required');
    }
  }
  constructor(props) {
    this.validate(props);
    this.API_DOMAIN = 'https://api.custos.cloud/';
    this.mapper = new Mapper();
  }
}
