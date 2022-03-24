/* eslint-disable react-hooks/rules-of-hooks */
import useAsyncSelector, { IUseAsyncSelector } from './useAsyncSelector';
import useAsyncDispatch, { IUseAsyncDispatch } from './useAsyncDispatch';

export type IUseAsyncReducer = IUseAsyncSelector & IUseAsyncDispatch;

const useAsyncReducer = ({ stateKey, paginationKey, limit, ...props }: IUseAsyncReducer) => {
  return () => {
    const { data, error, pagination } = useAsyncSelector({
      stateKey,
      paginationKey,
      limit,
    });
    const { setData, setError, setStatus, setPage, setCount, clear, clearData, getData, refreshData } = useAsyncDispatch(props);

    return {
      data,
      error,
      pagination,
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
};

export default useAsyncReducer;
