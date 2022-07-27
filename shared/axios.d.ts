import axios, { Method, AxiosInstance, AxiosRequestHeaders, AxiosResponse, AxiosError } from 'axios';
export interface onRequestProps {
    instance?: AxiosInstance;
    url: string;
    method: Method;
    query?: Record<string, any>;
    data?: any;
    headers?: AxiosRequestHeaders;
}
declare const CancelToken: import("axios").CancelTokenStatic, isCancel: (value: any) => boolean;
declare const instance: AxiosInstance;
declare const plainInstance: AxiosInstance;
declare const isAxiosError: <E>(err: unknown) => err is AxiosError<any, any>;
declare const requestAxios: ({ instance, url, method, query, data, headers }: onRequestProps) => Promise<AxiosResponse>;
export { axios, instance, plainInstance, requestAxios, isAxiosError, CancelToken, isCancel };
