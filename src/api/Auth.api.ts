import { BASE_URL, KEY_ACCESS_TOKEN } from "../constants";
import BaseApi from "./Base.api";

class AuthApi extends BaseApi {
  url: string;
  routes: {
    register: string;
    login: string;
  };

  constructor(baseUrl: string) {
    super(baseUrl);

    this.url = this.baseUrl + "api/auth";
    this.routes = {
      register: "/register",
      login: "/login",
    };
  }

  async register(data: { email: string; password: string }) {
    const url = `${this.url + this.routes.register}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(await response.json());
      }

      return response.json();
    } catch (e: unknown) {
      const error = e as Error;
      if (error.message.includes("already exists")) {
        throw { email: error.message };
      }
      if (error.message.includes("fails to match")) {
        throw {
          password:
            "Password must contain at least min 8 characters, 1 lowercase, 1 uppercase, 1 special character and 1 digit",
        };
      }
      throw error;
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
      if (!response.ok) {
        throw new Error(await response.json());
      }
      const result = await response.json();

      localStorage.setItem(KEY_ACCESS_TOKEN, result.accessToken);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    const url = this.url;
    const token = localStorage.getItem(KEY_ACCESS_TOKEN);

    try {
      this.headers.append("Authorization", `Bearer ${token}`);
      const response = await fetch(url, {
        method: "DELETE",
        headers: this.headers,
      });
      const result = await response.json();
      console.log(result);

      localStorage.removeItem(KEY_ACCESS_TOKEN);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AuthApi(BASE_URL);
