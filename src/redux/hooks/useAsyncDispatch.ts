import React from "react";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { AsyncModelStatus, createAsyncModel } from "../lib";

export type IUseAsyncDispatch = {
  setData?: Function;
  setError?: Function;
  setStatus?: Function;
  setPage?: Function;
  setCount?: Function;
  clear?: Function;
  clearData?: Function;
  getData?: Function;
  refreshData?: Function;
};

const capitalizeString = (text: string): string => {
  if (text.length === 0) return text;
  return text[0].toUpperCase() + text.slice(1);
};

const getMethodName = (stateKeys: string[]): string => {
  if (stateKeys.length !== 2) throw new Error("StateKey가 잘못되었습니다");
  return `${capitalizeString(stateKeys[1])}`;
};

export const createAsyncActions = (stateKey: string) => {
  const stateKeys = stateKey.split(".");
  const methodName = getMethodName(stateKeys);
  const dataKey = stateKeys[1];

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

export const getAsyncActions = (actions: object, stateKey: string) => {
  const methodName = getMethodName(stateKey.split("."));

  const filterActions: any = {};
  Object.entries(actions).forEach(([key, value]) => {
    if (key.includes(methodName)) {
      filterActions[key.replace(methodName, "")] = value;
    }
  });

  return filterActions;
};

const useAsyncDispatch = (props: IUseAsyncDispatch) => {
  const dispatch = useDispatch();

  const setData = React.useCallback(
    (data?: any) => {
      if (props.setData) {
        console.log(props.setData, data);
        dispatch(props.setData(data));
      }
    },
    [dispatch, props]
  );

  const setError = React.useCallback(
    (data?: any) => {
      if (props.setError) {
        dispatch(props.setError(data));
      }
    },
    [dispatch, props]
  );

  const setStatus = React.useCallback(
    (data: AsyncModelStatus) => {
      if (props.setStatus) {
        dispatch(props.setStatus(data));
      }
    },
    [dispatch, props]
  );

  const setPage = React.useCallback(
    (data: number) => {
      if (props.setPage) {
        dispatch(props.setPage(data));
      }
    },
    [dispatch, props]
  );

  const setCount = React.useCallback(
    (data: number) => {
      if (props.setCount) {
        dispatch(props.setCount(data));
      }
    },
    [dispatch, props]
  );

  const clear = React.useCallback(() => {
    if (props.clear) {
      dispatch(props.clear());
    }
  }, [dispatch, props]);

  const clearData = React.useCallback(() => {
    if (props.clearData) {
      dispatch(props.clearData());
    }
  }, [dispatch, props]);

  const getData = React.useCallback(
    async <T = any>(data?: T) => {
      if (props.getData) {
        return await dispatch(props.getData(data));
      }
    },
    [dispatch, props]
  );

  const refreshData = React.useCallback(
    async <T = any>(data?: T) => {
      if (props.refreshData) {
        return await dispatch(props.refreshData(data));
      }
    },
    [dispatch, props]
  );

  return {
    setData,
    setError,
    setStatus,
    setPage,
    setCount,
    clear,
    clearData,
    getData,
    refreshData,
  };
};

export default useAsyncDispatch;
