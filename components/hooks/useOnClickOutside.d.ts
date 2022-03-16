import { RefObject } from 'react';
declare type Handler = (event: MouseEvent) => void;
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(refs: RefObject<T>[] | RefObject<T>, handler: Handler, mouseEvent?: 'mousedown' | 'mouseup'): void;
export default useOnClickOutside;
