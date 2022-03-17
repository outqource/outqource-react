import { types } from 'mobx-state-tree';
import AsyncModel from './AsyncModel';
function createAsyncModel(model, initialValue) {
    return types.optional(AsyncModel(model), {
        status: 'default',
        data: initialValue !== null && initialValue !== void 0 ? initialValue : null,
        error: null,
        headers: null,
    });
}
export default createAsyncModel;
//# sourceMappingURL=createAsyncModel.js.map