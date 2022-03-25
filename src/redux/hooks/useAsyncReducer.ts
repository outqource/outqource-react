/* eslint-disable react-hooks/rules-of-hooks */
import useAsyncSelector, { IUseAsyncSelector } from './useAsyncSelector';
import useAsyncDispatch, { IUseAsyncDispatch } from './useAsyncDispatch';

export type IUseAsyncReducer = IUseAsyncSelector & IUseAsyncDispatch;

const useAsyncReducer = ({ stateKey, stateItemKeys, ...props }: IUseAsyncReducer) => {
  return () => {
    const selector = useAsyncSelector({ stateKey, stateItemKeys });
    const dispatcher = useAsyncDispatch(props);

    return {
      ...selector,
      ...dispatcher,
    };
  };
};

export default useAsyncReducer;
