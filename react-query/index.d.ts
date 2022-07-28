import { QueryClient, QueryClientProvider, UseQueryOptions, QueryKey, QueryFunction, useMutation } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UseInfiniteQueryOptions } from 'react-query/types/react/types';
export declare const defaultQueryClientOptions: {
    defaultOptions: {
        queries: {
            refetchOnMount: boolean;
        };
    };
};
export declare type CreateUseQueryProps<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = {
    key: ((...args: any[]) => QueryKey) | QueryKey;
    fn: ((...args: any[]) => QueryFunction) | QueryFunction;
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
};
export declare type UseQueryProps<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = {
    key?: any;
    fn?: any;
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
        initialData?: () => undefined;
    };
};
export declare type CreateUseInfinityQueryProps<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = {
    key: ((...args: any[]) => QueryKey) | QueryKey;
    fn: ((...args: any[]) => QueryFunction) | QueryFunction;
    options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'queryKey'>;
};
export declare type UseInfinityQueryProps<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = {
    key?: any;
    fn?: any;
    options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'queryKey'>;
};
export declare const createUseQueries: (params: CreateUseQueryProps[]) => (<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(props?: UseQueryProps<TQueryFnData, TError, TData, TQueryKey> | undefined) => import("react-query").UseQueryResult<TData, TError>)[];
export declare const createUseInfinityQueries: (params: CreateUseInfinityQueryProps[]) => (<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(props?: UseInfinityQueryProps<unknown, unknown, unknown, QueryKey> | undefined) => import("react-query").UseInfiniteQueryResult<TData, TError>)[];
export { QueryClient, QueryClientProvider, ReactQueryDevtools, useMutation };
