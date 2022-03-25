import { useSelector, shallowEqual } from 'react-redux';

export type IUseAsyncSelector = {
  stateKey: string;
  stateItemKeys: string | string[];
};

export type TUseAsyncSelector = {
  [key: string]: any;
};

const useAsyncSelector = ({ stateKey, stateItemKeys }: IUseAsyncSelector): TUseAsyncSelector => {
  const state = useSelector((state: any) => {
    const firstState = state[stateKey];
    const selector: any = {};

    if (Array.isArray(stateItemKeys)) {
      stateItemKeys.forEach((itemKey) => {
        selector[`${itemKey}Data`] = firstState[itemKey]?.data;
        selector[`${itemKey}Status`] = firstState[itemKey]?.status;
        selector[`${itemKey}Error`] = firstState[itemKey]?.error;
      });
    }

    return selector;
  }, shallowEqual);

  return state;
};

export default useAsyncSelector;
