import { IAnyType, IOptionalIType, ValidOptionalValues } from 'mobx-state-tree';
declare function createAsyncModel<T extends IAnyType = IAnyType>(model: T, initialValue?: any): IOptionalIType<IAnyType, ValidOptionalValues>;
export default createAsyncModel;
