import 'whatwg-fetch';

export default class mapper {
  constructor(props) {
    Object.assign(this, props);
  }
  add() {
    return new Promise((fulfill, reject) => {
      fulfill();
    });
  }
  remove() {
    return new Promise((fulfill, reject) => {
      fulfill();
    });
  }
}
