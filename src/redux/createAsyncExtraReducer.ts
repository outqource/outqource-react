import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

export type NoInfer<T> = [T][T extends any ? 0 : never];

export const createAsyncExtraReducer = <State = any>(builder: ActionReducerMapBuilder<NoInfer<State>>, options?: { pagination: boolean }) => {
  return (thunk: any, key: string) => {
    builder.addCase(thunk.pending, (state, _) => {
      state[key].status = 'loading';
      state[key].error = null;
    });
    builder.addCase(thunk.fulfilled, (state, action) => {
      state[key].status = 'success';
      state[key].error = null;

      if (options?.pagination === true) {
        state[key].data = [...state[key].data, ...action.payload];
      } else {
        state[key].data = action.payload;
      }
    });
    builder.addCase(thunk.rejected, (state, action) => {
      state[key].status = 'error';
      state[key].error = action.payload;
    });
  };
};
