import axios, { AxiosRequestConfig } from "axios";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface IHttpService {
  get<T>(url: string, options?: AxiosRequestConfig): Promise<T>;
  post<T, U>(url: string, body: U, options?: AxiosRequestConfig): Promise<T>;
  put<T, U>(url: string, body: U, options?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, options?: AxiosRequestConfig): Promise<T>;
  patch<T, U>(url: string, body: U, options?: AxiosRequestConfig): Promise<T>;
}

class HttpService implements IHttpService {
  private async request<T, U>(
    method: HttpMethod,
    url: string,
    body?: U,
    options: AxiosRequestConfig<T> = {}
  ): Promise<T> {
    const response = await axios({
      method,
      url,
      data: body,
      ...options,
    });
    return response.data;
  }

  public get<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
    return this.request<T, undefined>(HttpMethod.GET, url, undefined, options);
  }

  public post<T, U>(
    url: string,
    body: U,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T, U>(HttpMethod.POST, url, body, options);
  }

  public put<T, U>(
    url: string,
    body: U,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T, U>(HttpMethod.PUT, url, body, options);
  }

  public patch<T, U>(
    url: string,
    body: U,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T, U>(HttpMethod.PATCH, url, body, options);
  }

  public delete<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
    return this.request<T, undefined>(
      HttpMethod.DELETE,
      url,
      undefined,
      options
    );
  }
}

export default new HttpService();
