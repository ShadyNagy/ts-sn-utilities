export class ApiHelper {

  constructor() {}

  static createQuery(obj: any): string {
    if (!obj || obj === undefined) {
      return '';
    }

    let result = '';
    const properties = Object.getOwnPropertyNames(obj);
    for (let index = 0; index < properties.length; index++) {
      const property = properties[index];
      const val = obj[property];

      result += `${property}=${val}`;
      if (index !== properties.length - 1) {
        result += '&';
      }
    }

    return result;
  }
}
