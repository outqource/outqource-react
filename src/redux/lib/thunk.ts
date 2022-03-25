import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Dispatch } from "redux";
import type {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
} from "@reduxjs/toolkit";

import isArray from "lodash/isArray";
import mergeWith from "lodash/mergeWith";

function customizer(objValue: any, srcValue: any) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }

  return srcValue;
}

export const mergeWithPagination = (object: any, other: any) =>
  mergeWith({}, object, other, customizer);

export type AsyncThunkExtraOptions = {
  pageKey?: string;
  countKey?: string;
  mergeKey?: string;
  initialPage?: number;
  initialCount?: number;
};

const getMergeKeys = (mergeKey?: string): Array<string> => {
  if (!mergeKey) return [];
  return mergeKey.split(".");
};

const getPrevState = (state: any, mergeKeys: string[]): any => {
  let prevState: any = state;
  for (const mergeKey of mergeKeys) {
    if (prevState) {
      prevState = prevState[mergeKey];
    }
  }

  return prevState;
};

type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: Dispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

export const createAsyncPaginationThunk = <
  Returned,
  ThunkArg = void,
  ThunkApiConfig extends AsyncThunkConfig = {}
>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
  extraOptions?: AsyncThunkExtraOptions,
  options?: AsyncThunkOptions<ThunkArg, {}>
) => {
  const {
    mergeKey,
    pageKey = "page",
    initialPage = 1,
    countKey = "count",
    initialCount = 0,
  } = extraOptions ?? {};
  const mergeKeys = getMergeKeys(mergeKey);

  const newPayloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    ThunkApiConfig
  > = async (arg, thunkAPI) => {
    const response = (await payloadCreator(arg, thunkAPI)) as any;

    if (!mergeKey) {
      return response;
    }
    if (!response) {
      return response;
    }
    if (axios.isAxiosError(response)) {
      return response;
    }

    const state = thunkAPI.getState() as any;
    if (mergeKeys.length === 0) {
      return response;
    }

    const prevState = getPrevState(state, mergeKeys);
    if (!prevState || !prevState[pageKey]) {
      return { ...response, [pageKey]: initialPage, [countKey]: initialCount };
    }

    return mergeWithPagination(prevState, {
      ...response,
      [pageKey]: prevState[pageKey] + 1,
      [countKey]: response[countKey] ?? prevState[countKey],
    });
  };

  return createAsyncThunk(typePrefix, newPayloadCreator, options as any);
};

export const createAsyncRefreshThunk = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
  extraOptions?: Omit<AsyncThunkExtraOptions, "mergeKey">,
  options?: AsyncThunkOptions<ThunkArg, {}>
) => {
  const { pageKey = "page", initialPage = 1 } = extraOptions ?? {};

  const newPayloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    {}
  > = async (arg, thunkAPI) => {
    const response = (await payloadCreator(arg, thunkAPI)) as any;
    if (!response) {
      return response;
    }
    if (axios.isAxiosError(response)) {
      return response;
    }

    const nextState = {
      ...response,
      [pageKey]: initialPage,
    };

    return nextState;
  };

  return createAsyncThunk(typePrefix, newPayloadCreator, options);
};
