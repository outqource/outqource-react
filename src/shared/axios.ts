import axios, { Method, AxiosInstance, AxiosRequestHeaders, AxiosResponse, AxiosError } from 'axios';
import queryString from 'query-string';

export interface onRequestProps {
  instance?: AxiosInstance;
  url: string;
  method: Method;
  query?: Record<string, any>;
  data?: any;
  headers?: AxiosRequestHeaders;
}

const { CancelToken, isCancel } = axios;

const baseSettings = {
  timeout: 10 * 1000,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requestError = (error: any): any => {
  return Promise.reject(error);
};

const resolveResponse = (response: AxiosResponse): AxiosResponse => response;

const responseError = (error: AxiosError): Promise<never> => {
  // eslint-disable-next-line no-console
  console.log(error);
  return Promise.reject(error);
};

const instance = axios.create(baseSettings);
instance.interceptors.request.use(config => config, requestError);
instance.interceptors.response.use(resolveResponse, responseError);

const plainInstance = axios.create({
  ...baseSettings,
  withCredentials: false,
});

plainInstance.interceptors.request.use(config => config, requestError);
plainInstance.interceptors.response.use(resolveResponse, responseError);

const isAxiosError = <E>(err: unknown | AxiosError<E>): err is AxiosError => axios.isAxiosError(err);

const requestAxios = async ({ instance = axios, url, method, query, data, headers }: onRequestProps): Promise<AxiosResponse> => {
  try {
    if (query) {
      url = `${url}?${queryString.stringify(query)}`;
    }
    return await instance({
      method,
      url,
      data,
      headers,
    });
  } catch (error) {
    const e = error as any;
    return e;
  }
};

export { axios, instance, plainInstance, requestAxios, isAxiosError, CancelToken, isCancel };
