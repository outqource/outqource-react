import { useAsyncStorage as useBaseAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState, useCallback } from "../../shared";

type TUseAsyncStorage<T> = {
  value: T | null;
  getItem(): Promise<void>;
  setItem(newValue: any): Promise<void>;
};

const useAsyncStorage = <T = any>(key: string): TUseAsyncStorage<T> => {
  const [value, setValue] = useState<T | null>(null);
  const { getItem: getBaseItem, setItem: setBaseItem } =
    useBaseAsyncStorage(key);

  const getItem = useCallback(async () => {
    const item = await getBaseItem();
    setValue(item as T | null);
  }, [getBaseItem]);

  const setItem = useCallback(
    async (newValue: any) => {
      await setBaseItem(newValue);
      setValue(newValue);
    },
    [setBaseItem]
  );

  return {
    value,
    getItem,
    setItem,
  };
};

export default useAsyncStorage;
