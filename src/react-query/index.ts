import { QueryClient, QueryClientProvider, useQuery, UseQueryOptions, QueryKey, QueryFunction, useMutation } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export const defaultQueryClientOptions = {
  defaultOptions: { queries: { refetchOnMount: false } },
};

export type CreateUseQueryProps<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = {
  key: ((...args: any[]) => QueryKey) | QueryKey;
  fn: ((...args: any[]) => QueryFunction) | QueryFunction;
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined };
};

export type UseQueryProps<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = {
  key?: any;
  fn?: any;
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & { initialData?: () => undefined };
};

export const createUseQueries = (params: CreateUseQueryProps[]) =>
  params.map(param => {
    return <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(props?: UseQueryProps<TQueryFnData, TError, TData, TQueryKey>) => {
      if (!props) props = {};

      const queryKey = (typeof param.key !== 'function' ? param.key : param.key(props.key)) as TQueryKey;

      const queryFn = (props.fn ? (param.fn as (props?: any) => QueryFunction)(props.fn) : param.fn) as QueryFunction<TQueryFnData, TQueryKey>;

      const queryOptions = {
        ...(param.options || {}),
        ...(props.options || {}),
      } as Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>;

      return useQuery<TQueryFnData, TError, TData, TQueryKey>(queryKey, queryFn, queryOptions);
    };
  });

export { QueryClient, QueryClientProvider, ReactQueryDevtools, useMutation };
