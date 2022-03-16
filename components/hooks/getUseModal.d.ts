import { ModalType } from "../lib";
export declare type UseModalOptions = {
    closeTimeoutMS?: number;
    duplicate?: boolean;
};
declare const getUseModal: (modalComponents: any) => (name: string, config?: UseModalOptions | undefined) => {
    isOpen: boolean;
    modals: ModalType[];
    createModal: (newProps?: any, unshift?: boolean | undefined) => void;
    deleteModal: () => void;
    clearModal: () => void;
};
export default getUseModal;
