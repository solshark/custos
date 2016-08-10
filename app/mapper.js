import 'whatwg-fetch';
export default class Mapper {
  constructor(props) {
    Object.assign(this, props);
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
