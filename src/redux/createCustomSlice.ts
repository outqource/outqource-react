import { createSlice as createBaseSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CreateSliceOptions, Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';
import { AsyncModel, createAsyncModel, AsyncModelStatus } from './model';
import type { ReducerStateActions } from './types';

export type Reducer<T> = ReducerStateActions<keyof T>;

const capitalizeString = (text: keyof any): string => {
  if (typeof text !== 'string') return '';

  if (text.length === 0) return text;
  return text[0].toUpperCase() + text.slice(1);
};

export const createCustomSlice = <State extends Record<string, unknown>, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
): Slice<State, CaseReducers & Reducer<State>, Name> => {
  const { initialState } = options;

  const asyncStateNames = Object.entries(initialState).reduce<(keyof State)[]>((acc, [stateKey, stateValue]) => {
    if (typeof stateValue === 'object' && stateValue !== null) {
      const stateValueKeys = Object.keys(stateValue ?? {}).join(',');
      if (stateValueKeys === 'status,data,error') {
        return [...acc, stateKey];
      }
    }
    return acc;
  }, []);

  asyncStateNames.forEach(stateName => {
    const reducers: Reducer<State> = {} as Reducer<State>;

    reducers[`set${capitalizeString(stateName)}Status`] = (state: State, action: PayloadAction<AsyncModelStatus>) => {
      (state[stateName] as AsyncModel).status = action.payload;
    };
    reducers[`set${capitalizeString(stateName)}Data`] = (state: State, action: PayloadAction<any>) => {
      (state[stateName] as AsyncModel).data = action.payload;
    };
    reducers[`set${capitalizeString(stateName)}Error`] = (state: State, action: PayloadAction<any>) => {
      (state[stateName] as AsyncModel).error = action.payload;
    };
    reducers[`clear${capitalizeString(stateName)}`] = (state: State, action: PayloadAction<any>) => {
      (state[stateName] as AsyncModel) = createAsyncModel(action.payload);
    };

    options.reducers = {
      ...options.reducers,
      ...reducers,
    };
  });

  return createBaseSlice(options as CreateSliceOptions<State, CaseReducers & Reducer<State>, Name>);
};
