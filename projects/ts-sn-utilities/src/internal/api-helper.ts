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

  public static createUrlQueryWithUrl(url: string, object: any): string {
    const properties = Object.getOwnPropertyNames(object);
    let result = url + '?';
    for (let index = 0; index < properties.length; index++) {
        const property = properties[index];
        if (property && property !== undefined) {
            const val = object[property];
            if (val === undefined || val === null || val === 'null') {
                result += `${property}=`;
            }else  {
                result += `${property}=${val}`;
            }
        }
        if (index !== properties.length - 1) {
            result += '&';
        }
    }

    return result;
  }
}
