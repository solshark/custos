import 'whatwg-fetch';
console.log('mapper');
export default class mapper {
  constructor(props) {
    Object.assign(this, props);
    console.log(this);
    this.API_ENDPOINT = 'mapper/';
  }
  add() {
    return new Promise((fulfill, reject) => {
      // fetch(`${this.}`)
      fulfill();
    });
  }
  remove() {
    return new Promise((fulfill, reject) => {
      fulfill();
    });
  }
}
