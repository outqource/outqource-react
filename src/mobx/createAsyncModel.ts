import { types, IAnyType, IOptionalIType, ValidOptionalValues } from 'mobx-state-tree';
import AsyncModel from './AsyncModel';

function createAsyncModel<T extends IAnyType = IAnyType>(model: T, initialValue?: any): IOptionalIType<IAnyType, ValidOptionalValues> {
  return types.optional(AsyncModel<T>(model), {
    status: 'default',
    data: initialValue ?? null,
    error: null,
    headers: null,
  });
}

export default createAsyncModel;
