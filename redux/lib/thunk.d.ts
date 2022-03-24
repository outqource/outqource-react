import type { Dispatch } from "redux";
import type { AsyncThunkOptions, AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
export declare const mergeWithPagination: (object: any, other: any) => any;
export declare type AsyncThunkExtraOptions = {
    pageKey?: string;
    countKey?: string;
    mergeKey?: string;
    initialPage?: number;
    initialCount?: number;
};
declare type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: Dispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
};
export declare const createAsyncPaginationThunk: <Returned, ThunkArg = void, ThunkApiConfig extends AsyncThunkConfig = {}>(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>, extraOptions?: AsyncThunkExtraOptions | undefined, options?: AsyncThunkOptions<ThunkArg, {}> | undefined) => import("@reduxjs/toolkit").AsyncThunk<Returned, ThunkArg, {}>;
export declare const createAsyncRefreshThunk: <Returned, ThunkArg = void>(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>, extraOptions?: Omit<AsyncThunkExtraOptions, "mergeKey"> | undefined, options?: AsyncThunkOptions<ThunkArg, {}> | undefined) => import("@reduxjs/toolkit").AsyncThunk<Returned, ThunkArg, {}>;
export {};
