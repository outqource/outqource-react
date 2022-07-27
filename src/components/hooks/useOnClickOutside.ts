import { RefObject } from 'react';
import useEventListener from './useEventListener';

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(refs: RefObject<T>[] | RefObject<T>, handler: Handler, mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'): void {
  useEventListener(mouseEvent, (event: MouseEvent) => {
    if (Array.isArray(refs)) {
      let isNotContained = false;

      for (const ref of refs) {
        const el = ref?.current;
        if (!el) break;

        const target = event.target;
        if (ref.current.contains(target as Node)) {
          isNotContained = false;
          break;
        } else {
          isNotContained = true;
        }
      }

      if (isNotContained) handler(event);
    } else {
      const el = refs?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    }
  });
}

export default useOnClickOutside;
