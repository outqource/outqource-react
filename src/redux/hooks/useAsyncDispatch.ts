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
  fetch?: Function;
  refresh?: Function;
};

const capitalizeString = (text: string): string => {
  if (text.length === 0) return text;
  return text[0].toUpperCase() + text.slice(1);
};

const getMethodName = (stateKeys: string[]): string => {
  let methodName = "";
  stateKeys.forEach((stateKey: string) => {
    methodName = `${methodName}${capitalizeString(stateKey)}`;
  });

  return methodName;
};

export const createAsyncActions = (stateKey: string) => {
  const stateKeys = stateKey.split(".");
  if (stateKeys.length !== 2) throw new Error("StateKey가 잘못되었습니다");

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

const useAsyncDispatch = (props: IUseAsyncDispatch) => {
  const dispatch = useDispatch();

  const setData = React.useCallback(
    (data?: any) => {
      if (props.setData) {
        console.log(props.setData, data);
        dispatch(props.setData(data));
      }
    },
    [props.setData]
  );

  const setError = React.useCallback(
    (data?: any) => {
      if (props.setError) {
        dispatch(props.setError(data));
      }
    },
    [props.setError]
  );

  const setStatus = React.useCallback(
    (data: AsyncModelStatus) => {
      if (props.setStatus) {
        dispatch(props.setStatus(data));
      }
    },
    [props.setStatus]
  );

  const setPage = React.useCallback(
    (data: number) => {
      if (props.setPage) {
        dispatch(props.setPage(data));
      }
    },
    [props.setPage]
  );

  const setCount = React.useCallback(
    (data: number) => {
      if (props.setCount) {
        dispatch(props.setCount(data));
      }
    },
    [props.setCount]
  );

  const clear = React.useCallback(() => {
    if (props.clear) {
      dispatch(props.clear());
    }
  }, [props.clear]);

  const clearData = React.useCallback(() => {
    if (props.clearData) {
      dispatch(props.clearData());
    }
  }, [props.clearData]);

  const getData = React.useCallback(
    (data?: any) => {
      if (props.fetch) {
        dispatch(props.fetch(data));
      }
    },
    [props.fetch]
  );

  const refreshData = React.useCallback(
    (data?: any) => {
      if (props.refresh) {
        dispatch(props.refresh(data));
      }
    },
    [props.refresh]
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
