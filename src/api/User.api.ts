import { BASE_URL, KEY_ACCESS_TOKEN } from "~/constants";
import BaseApi from "./Base.api";

class UserApi extends BaseApi {
  url: string;

  constructor(baseUrl: string) {
    super(baseUrl);

    this.url = this.baseUrl + "api/user";
  }

  async getAll() {
    throw new Error("Not implemented");
  }

  async get(id: string): Promise<TUser> {
    const token = localStorage.getItem(KEY_ACCESS_TOKEN);
    this.headers.set("Authorization", `Bearer ${token}`);
    const url = `${this.url}/${id}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: this.headers,
      });
      if (!response.ok) {
        throw new Error(await response.json());
      }

      return response.json();
    } catch (e: unknown) {
      const error = e as Error;
      throw error;
    }
  }

  async update(id: string, data: Partial<TUser>): Promise<TUser> {
    const token = localStorage.getItem(KEY_ACCESS_TOKEN);
    this.headers.set("Authorization", `Bearer ${token}`);
    const url = `${this.url}/${id}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(await response.json());
      }

      return response.json();
    } catch (e: unknown) {
      const error = e as Error;
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    const token = localStorage.getItem(KEY_ACCESS_TOKEN);
    this.headers.set("Authorization", `Bearer ${token}`);
    const url = `${this.url}/${id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: this.headers,
      });
      if (!response.ok) {
        throw new Error(await response.json());
      }
    } catch (e: unknown) {
      const error = e as Error;
      throw error;
    }
  }
}

export default new UserApi(BASE_URL);
