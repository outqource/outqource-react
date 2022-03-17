import { Instance, IAnyModelType } from 'mobx-state-tree';

function onPromise<T extends IAnyModelType>(self: Instance<T>) {
  return function* generator(promise: (props?: any) => Promise<any>): any {
    self.onLoading();

    const { status, data, headers } = (yield promise()) as { status: number; data: any; headers: any };
    if (status >= 200) {
      self.onSuccess(data, headers);
    } else {
      self.onError(data, headers);
    }
  };
}

export default onPromise;
