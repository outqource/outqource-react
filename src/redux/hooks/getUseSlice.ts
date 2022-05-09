import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AsyncThunk, CaseReducerActions } from "@reduxjs/toolkit";
import type {
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit/dist/createSlice";

import { ReducerStateActions } from "../../types/util";
import { Reducer } from "../lib/createSlice";

type Action<T extends CaseReducerActions<any>> = {
  [H in keyof T]: (...args: any[]) => any;
};

type PromiseAction<T extends Record<string, AsyncThunk<any, any, any>>> = {
  [H in keyof T]: (...args: any[]) => Promise<any>;
};

type TUseSlice<
  State,
  T extends CaseReducerActions<any>,
  K extends Record<string, AsyncThunk<any, any, any>>
> = State & ReducerStateActions<keyof State> & Action<T> & PromiseAction<K>;

const getUseSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State> & Reducer<State>,
  Name extends string = string,
  Promises extends Record<string, AsyncThunk<any, any, any>> = {}
>(
  slice: Slice<State, CaseReducers, Name>,
  promises: Promises = {} as Promises
) => {
  const { name, actions } = slice;

  return (): TUseSlice<State, typeof actions, typeof promises> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch<any>();
    const sliceState = useSelector<State>((state) => state[name.toLowerCase()]);

    const sliceActions = {};
    Object.entries(actions).forEach(([actionKey, actionFunc]) => {
      sliceActions[actionKey] = React.useCallback(
        (value: any) => {
          return dispatch(actionFunc(value));
        },
        [dispatch]
      );
    });

    const promiseActions = {};
    Object.entries(promises).forEach(
      ([promiseActionKey, promiseActionFunc]) => {
        promiseActions[promiseActionKey] = React.useCallback(
          async (value: any) => {
            return await dispatch(promiseActionFunc(value));
          },
          [dispatch]
        );
      }
    );

    return {
      ...(sliceState as State),
      ...(sliceActions as Action<typeof actions> &
        ReducerStateActions<keyof State>),
      ...(promiseActions as PromiseAction<typeof promises>),
    };
  };
};

export default getUseSlice;
