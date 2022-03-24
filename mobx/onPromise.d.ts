import { Instance, IAnyModelType } from 'mobx-state-tree';
declare function onPromise<T extends IAnyModelType>(self: Instance<T>): (promise: (props?: any) => Promise<any>) => any;
export default onPromise;
