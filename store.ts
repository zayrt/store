const _ = require("lodash");

class Store {
  data: Object;

  constructor() {
    this.data = {};
  }

  getData(path?: string) {
    if (path && path.length > 0) {
      const result = _.get(this.data, path)

      if (result) {
        return result;
      } else {
        throw new Error("[GET] : This path does not exist");
      }
    } else {
      throw new Error('[GET] : Empty path is incorrect')
    }
  }

  setData(path: string, value: Object) {
    if (path && path.length > 0) {
      _.set(this.data, path, value)
    } else {
      throw new Error('[SET] : Empty path is incorrect');
    }
  }

  toJSON() {
    return JSON.stringify(this.data);
  }
}

export default Store;