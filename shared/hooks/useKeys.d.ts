import { RefObject } from 'react';
export default function useKeys(): {
    useKey: (key: string, cb: (e?: KeyboardEvent | undefined) => void) => void;
    useEnterToConfirm: (btnRef: RefObject<HTMLButtonElement>, cb?: ((e?: KeyboardEvent | undefined) => void) | undefined) => void;
};
