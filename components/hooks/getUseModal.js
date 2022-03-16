var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useCallback, useContext, useMemo, useEffect } from "react";
import { ModalContext, createModal as createModalAction, createUnshiftModal as createUnshiftModalAction, deleteModal as deleteModalAction, clearModal as clearModalAction, } from "../lib";
var getUseModal = function (modalComponents) {
    return function (name, config) {
        var _a = useContext(ModalContext), state = _a.state, dispatch = _a.dispatch;
        var closeTimeoutMS = useMemo(function () { var _a; return (_a = config === null || config === void 0 ? void 0 : config.closeTimeoutMS) !== null && _a !== void 0 ? _a : 0; }, [config]);
        var duplicate = useMemo(function () { var _a; return (_a = config === null || config === void 0 ? void 0 : config.duplicate) !== null && _a !== void 0 ? _a : false; }, [config]);
        // 열려있는지 체크
        var isOpen = useMemo(function () {
            var isOpen = false;
            state.forEach(function (modal) {
                if (modal.name === name.toUpperCase())
                    isOpen = true;
            });
            return isOpen;
        }, [state, name]);
        // 열려있는 모달 체크
        var findModal = useMemo(function () {
            if (!isOpen)
                return null;
            var findModal = null;
            state.forEach(function (modal) {
                if (modal.name.toUpperCase() === name.toUpperCase()) {
                    findModal = modal;
                }
            });
            return findModal;
        }, [state, isOpen, name]);
        var deleteModal = useCallback(function () {
            dispatch(deleteModalAction({ name: name.toUpperCase(), closeTimeoutMS: closeTimeoutMS }));
        }, [name, dispatch, closeTimeoutMS]);
        var clearModal = useCallback(function () {
            dispatch(clearModalAction());
        }, [dispatch]);
        var createModal = useCallback(function (newProps, unshift) {
            var props = __assign({ onRequestClose: deleteModal, isOpen: true, closeTimeoutMS: closeTimeoutMS, duplicate: duplicate, modalComponents: modalComponents }, (newProps !== null && newProps !== void 0 ? newProps : {}));
            var newModal = {
                name: name.toUpperCase(),
                // component: modal,
                props: props,
            };
            if (!unshift) {
                dispatch(createModalAction(newModal));
            }
            else {
                dispatch(createUnshiftModalAction(newModal));
            }
        }, [dispatch, name, closeTimeoutMS, duplicate, deleteModal]);
        useEffect(function () {
            if (!isOpen || closeTimeoutMS === 0) {
                return;
            }
            if (findModal && !findModal.props.isOpen) {
                setTimeout(function () {
                    deleteModal();
                }, closeTimeoutMS + 100);
            }
        }, [isOpen, findModal, closeTimeoutMS, deleteModal]);
        return {
            isOpen: isOpen,
            modals: state,
            createModal: createModal,
            deleteModal: deleteModal,
            clearModal: clearModal,
        };
    };
};
export default getUseModal;
//# sourceMappingURL=getUseModal.js.map