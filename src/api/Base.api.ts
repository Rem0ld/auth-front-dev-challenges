export default class BaseApi {
  baseUrl: string;
  headers: Headers;

  constructor(baseUrl: string) {
    const lastCharacter = baseUrl[baseUrl.length - 1];
    if (lastCharacter !== "/") {
      this.baseUrl = baseUrl + "/";
    } else {
      this.baseUrl = baseUrl;
    }

    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json; charset=utf-8");
  }
}
