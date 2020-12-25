import { Http } from '../helpers/Http';

export class BaseApi {
  protected http: Http;

  constructor(http: Http) {
    this.http = http;
  }
}
