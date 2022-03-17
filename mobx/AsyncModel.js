import { types, flow } from "mobx-state-tree";
import onPromise from "./onPromise";
import AnyModel from "./AnyModel";
function AsyncModel(model) {
    return types
        .model({
        status: types.optional(types.enumeration("status", ["default", "loading", "success", "error"]), "default"),
        data: types.maybeNull(model),
        error: types.maybeNull(AnyModel),
        headers: types.maybeNull(AnyModel),
    })
        .views(function (self) { return ({
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
    }); })
        .actions(function (self) { return ({
        onDefault: function (initialValue) {
            self.status = "default";
            self.error = null;
            self.data = initialValue !== null && initialValue !== void 0 ? initialValue : null;
        },
        onLoading: function () {
            self.status = "loading";
            self.error = null;
        },
        onSuccess: function (data, headers) {
            self.status = "success";
            self.error = null;
            self.data = data;
            self.headers = headers !== null && headers !== void 0 ? headers : null;
        },
        onError: function (error, headers) {
            self.status = "error";
            self.error = error;
            self.headers = headers;
        },
        connect: flow(onPromise(self)),
    }); });
}
export default AsyncModel;
//# sourceMappingURL=AsyncModel.js.map