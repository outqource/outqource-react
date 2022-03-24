import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const createAsyncPaginationThunk = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
  options?: AsyncThunkOptions<ThunkArg, {}> & AsyncThunkExtraOptions
) => {
  const {
    mergeKey,
    pageKey = "page",
    initialPage = 1,
    countKey = "count",
    initialCount = 0,
  } = options ?? {};
  const mergeKeys = getMergeKeys(mergeKey);

  const newPayloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    {}
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

  return createAsyncThunk(typePrefix, newPayloadCreator, options);
};

export const createAsyncRefreshThunk = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
  options?: AsyncThunkOptions<ThunkArg, {}> & AsyncThunkExtraOptions
) => {
  const {
    mergeKey,
    pageKey = "page",
    initialPage = 1,
    countKey = "count",
    initialCount = 0,
  } = options ?? {};
  const mergeKeys = getMergeKeys(mergeKey);

  const newPayloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    {}
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
    const nextState = {
      ...response,
      [pageKey]: initialPage,
      [countKey]: initialCount,
    };

    if (!prevState || !prevState[pageKey]) {
      return nextState;
    }

    return mergeWithPagination(prevState, nextState);
  };

  return createAsyncThunk(typePrefix, newPayloadCreator, options);
};
