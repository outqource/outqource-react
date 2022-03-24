import { IAnyType } from "mobx-state-tree";
import type { IMaybeNull, ISimpleType, IOptionalIType, UnionStringArray, ValidOptionalValues, IModelType } from "mobx-state-tree";
import type { AnyModelType } from "./AnyModel";
export declare type AsyncStatus = "default" | "loading" | "success" | "error";
export declare type AsyncModelType<T extends IAnyType = IAnyType> = {
    status: IOptionalIType<ISimpleType<UnionStringArray<AsyncStatus[]>>, ValidOptionalValues>;
    data: IMaybeNull<T>;
    error: IMaybeNull<AnyModelType>;
    headers: IMaybeNull<AnyModelType>;
};
declare function AsyncModel<T extends IAnyType = IAnyType>(model: T): IModelType<AsyncModelType<T>, any>;
export default AsyncModel;
