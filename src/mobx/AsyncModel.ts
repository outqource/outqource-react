import { types, flow, IAnyType } from "mobx-state-tree";
import type {
  IMaybeNull,
  ISimpleType,
  IOptionalIType,
  UnionStringArray,
  ValidOptionalValues,
  IModelType,
} from "mobx-state-tree";
import onPromise from "./onPromise";
import AnyModel from "./AnyModel";
import type { AnyModelType } from "./AnyModel";

export type AsyncStatus = "default" | "loading" | "success" | "error";

export type AsyncModelType<T extends IAnyType = IAnyType> = {
  status: IOptionalIType<
    ISimpleType<UnionStringArray<AsyncStatus[]>>,
    ValidOptionalValues
  >;
  data: IMaybeNull<T>;
  error: IMaybeNull<AnyModelType>;
  headers: IMaybeNull<AnyModelType>;
};

function AsyncModel<T extends IAnyType = IAnyType>(
  model: T
): IModelType<AsyncModelType<T>, any> {
  return types
    .model({
      status: types.optional(
        types.enumeration("status", ["default", "loading", "success", "error"]),
        "default"
      ),
      data: types.maybeNull(model),
      error: types.maybeNull(AnyModel),
      headers: types.maybeNull(AnyModel),
    } as AsyncModelType<T>)
    .views((self) => ({
      get isStatus() {
        return self.status;
      },
      get isDefault() {
        return self.status === "default";
      },
      get isLoading() {
        return self.status === "loading";
      },
      get isSuccess() {
        return self.status === "success";
      },
      get isError() {
        return self.status === "error";
      },
    }))
    .actions((self) => ({
      onDefault(initialValue?: any) {
        self.status = "default";
        self.error = null;
        self.data = initialValue ?? null;
      },
      onLoading() {
        self.status = "loading";
        self.error = null;
      },
      onSuccess(data: any, headers?: any) {
        self.status = "success";
        self.error = null;
        self.data = data;
        self.headers = headers ?? null;
      },
      onError(error: Error, headers?: any) {
        self.status = "error";
        self.error = error;
        self.headers = headers;
      },
      connect: flow(onPromise(self)),
    }));
}

export default AsyncModel;
