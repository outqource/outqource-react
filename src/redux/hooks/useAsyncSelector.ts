import React from 'react';
import { useSelector } from 'react-redux';

export type AsyncSelectorPagination =
  | {
      page: number;
      count: number;
      currentCount: number;
      limit: number;
      isPrev: boolean;
      isNext: boolean;
    }
  | undefined;

export type IUseAsyncSelector = {
  stateKey: string;
  paginationKey?: string;
  limit?: number;
};

export type TUseAsyncSelector = {
  data: any;
  error: any;
  pagination: AsyncSelectorPagination;
};

const useAsyncSelector = ({ stateKey, paginationKey = undefined, limit = 20 }: IUseAsyncSelector): TUseAsyncSelector => {
  const selectState = useSelector((state: any) => {
    const stateKeys = stateKey.split('.');
    let itemState = state;
    stateKeys.forEach(stateKey => {
      itemState = itemState[stateKey];
    });

    return itemState;
  });

  const data = React.useMemo(() => {
    return selectState.data ?? null;
  }, [selectState]);

  const error = React.useMemo(() => {
    return selectState.error ?? null;
  }, [selectState]);

  const pagination = React.useMemo((): AsyncSelectorPagination => {
    if (!paginationKey) return undefined;
    const { page = 1, count = 0 } = selectState.data ?? {};
    const data = selectState.data ? selectState.data[paginationKey] : [];

    let currentCount = 0;
    let isPrev = false;
    let isNext = false;

    if (Array.isArray(data) && data.length > 0) {
      currentCount = data.length;
      if (page > 1) isPrev = true;
      if (data.length < count) isNext = true;
    }

    return {
      page,
      count,
      currentCount,
      limit,
      isPrev,
      isNext,
    };
  }, [selectState, paginationKey, limit]);

  return {
    data,
    error,
    pagination,
  };
};

export default useAsyncSelector;
