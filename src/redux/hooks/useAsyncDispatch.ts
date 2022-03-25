/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { AsyncModelStatus, createAsyncModel } from "../lib";

export type IUseAsyncDispatch = {
  [key: string]: Function;
};

const capitalizeString = (text: string): string => {
  if (text.length === 0) return text;
  return text[0].toUpperCase() + text.slice(1);
};

export const createAsyncAction = (dataKey: string) => {
  const methodName = capitalizeString(dataKey);

  const setData = (state: any, action: PayloadAction<any>) => {
    state[dataKey].data = action.payload;
  };

  const setError = (state: any, action: PayloadAction<any>) => {
    state[dataKey].data = action.payload;
  };

  const setStatus = (state: any, action: PayloadAction<AsyncModelStatus>) => {
    state[dataKey].status = action.payload;
  };

  const setPage = (state: any, action: PayloadAction<number>) => {
    const prevData = state[dataKey].data || {};
    state[dataKey].data = { ...prevData, page: action.payload };
  };

  const setCount = (state: any, action: PayloadAction<number>) => {
    const prevData = state[dataKey].data || {};
    state[dataKey].data = { ...prevData, count: action.payload };
  };

  const clear = (state: any) => {
    state[dataKey] = createAsyncModel();
  };

  const clearData = (state: any) => {
    state[dataKey].data = null;
  };

  return {
    [`set${methodName}Data`]: setData,
    [`set${methodName}Error`]: setError,
    [`set${methodName}Status`]: setStatus,
    [`set${methodName}Page`]: setPage,
    [`set${methodName}Count`]: setCount,
    [`clear${methodName}`]: clear,
    [`clear${methodName}Data`]: clearData,
  };
};

export const createAsyncActions = (dataKeys: string | string[]) => {
  if (Array.isArray(dataKeys)) {
    return dataKeys.reduce(
      (acc, dataKey) => ({ ...acc, ...createAsyncAction(dataKey) }),
      {}
    );
  } else {
    return createAsyncAction(dataKeys);
  }
};

export const getAsyncActions = (
  actions: object,
  dataKeys: string | string[]
) => {
  const filterActions: any = {};

  if (Array.isArray(dataKeys)) {
    dataKeys.forEach((dataKey) => {
      const methodName = capitalizeString(dataKey);

      Object.entries(actions).forEach(([key, value]) => {
        if (key.includes(methodName)) {
          filterActions[key] = value;
        }
      });
    });
  } else {
    const dataKey = dataKeys;
    const methodName = capitalizeString(dataKey);

    Object.entries(actions).forEach(([key, value]) => {
      if (key.includes(methodName)) {
        filterActions[key] = value;
      }
    });
  }

  return filterActions;
};

const useAsyncDispatch = (props: IUseAsyncDispatch) => {
  const dispatch = useDispatch();

  const dispatchActions: any = {};
  Object.entries(props).forEach(([key, value]) => {
    dispatchActions[key] = React.useCallback(
      async (data?: any) => {
        return await dispatch(value(data));
      },
      [value]
    );
  });

  return dispatchActions;
};

export default useAsyncDispatch;
