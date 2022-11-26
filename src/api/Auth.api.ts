import { baseUrl } from "../constants";

class AuthApi {
  url: string;
  routes: {
    register: string;
    login: string;
  };
  headers: Headers;

  constructor(private baseUrl: string) {
    const lastCharacter = baseUrl[baseUrl.length - 1];
    if (lastCharacter !== "/") {
      baseUrl = baseUrl + "/";
    }

    this.url = baseUrl + "api/auth";
    this.routes = {
      register: "/register",
      login: "/login",
    };
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json; charset=utf-8");
  }

  async register(data: { email: string; password: string }) {
    const url = `${this.url + this.routes.register}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error as string);
    }
  }

  async login(data: { email: string; password: string }) {
    const url = `${this.url + this.routes.login}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();

      localStorage.setItem("access_token", result.token);

      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error as string);
    }
  }

  async logout() {
    const url = this.url;
    const token = localStorage.getItem("access_token");

    try {
      this.headers.append("Authorization", `Bearer ${token}`);
      const response = await fetch(url, {
        method: "DELETE",
        headers: this.headers,
      });
      const result = await response.json();

      localStorage.removeItem("access_token");
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AuthApi(baseUrl);
