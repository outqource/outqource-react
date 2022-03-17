import { types } from 'mobx-state-tree';
var AnyModel = types.custom({
    name: 'AnyModel',
    fromSnapshot: function (value) {
        return value;
    },
    toSnapshot: function (value) {
        return value;
    },
    isTargetType: function (value) {
        return value;
    },
    getValidationMessage: function (value) {
        return value;
    },
});
export default AnyModel;
//# sourceMappingURL=AnyModel.js.map