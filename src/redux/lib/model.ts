import type { AxiosError } from 'axios';

export type AsyncModelStatus = 'default' | 'loading' | 'success' | 'error';

export interface AsyncModel<T = any, E = AxiosError> {
  status: AsyncModelStatus;
  data?: T | null;
  error?: E | null;
}

export const createAsyncModel = <T = any, E = any>(data?: any): AsyncModel<T, E> => ({
  status: 'default',
  data: data ?? null,
  error: null,
});
