var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var createAsyncExtraReducer = function (builder, options) {
    return function (thunk, key) {
        builder.addCase(thunk.pending, function (state, _) {
            state[key].status = 'loading';
            state[key].error = null;
        });
        builder.addCase(thunk.fulfilled, function (state, action) {
            state[key].status = 'success';
            state[key].error = null;
            if ((options === null || options === void 0 ? void 0 : options.pagination) === true) {
                state[key].data = __spreadArray(__spreadArray([], state[key].data, true), action.payload, true);
            }
            else {
                state[key].data = action.payload;
            }
        });
        builder.addCase(thunk.rejected, function (state, action) {
            state[key].status = 'error';
            state[key].error = action.payload;
        });
    };
};
//# sourceMappingURL=createAsyncExtraReducer.js.map