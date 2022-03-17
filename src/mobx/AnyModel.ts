import { Instance, types } from 'mobx-state-tree';

const AnyModel = types.custom({
  name: 'AnyModel',
  fromSnapshot(value: any) {
    return value;
  },
  toSnapshot(value: any) {
    return value;
  },
  isTargetType(value: any): boolean {
    return value;
  },
  getValidationMessage(value: any): any {
    return value;
  },
});

export type AnyModelType = Instance<typeof AnyModel>;

export default AnyModel;
