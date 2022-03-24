import type { AxiosError } from "axios";
export declare type AsyncModelStatus = "default" | "loading" | "success" | "error";
export interface AsyncModel<T = any, E = AxiosError> {
    status: AsyncModelStatus;
    data?: T | null;
    error?: E | null;
}
export declare const createAsyncModel: <T = any, E = any>() => AsyncModel<T, E>;
