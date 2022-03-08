import type { AxiosError } from "axios";

export type AsyncModelStatus = "default" | "loading" | "success" | "error";

export interface AsyncModel<T = any, E = AxiosError> {
  status: AsyncModelStatus;
  data?: T | null;
  error?: E | null;
}

export const createAsyncModel = <T = any, E = any>(): AsyncModel<T, E> => ({
  status: "default",
  data: null,
  error: null,
});
