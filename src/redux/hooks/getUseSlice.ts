import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { CaseReducerActions } from '@reduxjs/toolkit';
import type { Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';

import { ReducerStateActions } from '../../types/util';
import { Reducer } from '../lib/createSlice';

type Action<T extends CaseReducerActions<any>> = {
    [H in keyof T]: (...args: any[]) => Promise<any>;
};

const getUseSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
    slice: Slice<State, CaseReducers& Reducer<State>, Name>
) => {
    const { name, actions } = slice;

    return (): State & Action<typeof actions> & ReducerStateActions<keyof State> => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const dispatch = useDispatch();
        const sliceState = useSelector<State>((state) => state[name.toLowerCase()]);

        const sliceActions = {};
        Object.entries(actions).forEach(([actionKey, actionFunc]) => {
            sliceActions[actionKey] = React.useCallback(
                async (value: any) => {
                    return await dispatch(actionFunc(value));
                },
                [dispatch, actionFunc]
            );
        });

        return {
            ...(sliceState as State),
            ...(sliceActions as Action<typeof actions> & ReducerStateActions<keyof State>),
        };
    };
};

export default getUseSlice;
