import { RefObject, useEffect } from 'react';

export const useClickOutside = <K extends HTMLElement>(
  refs: RefObject<K>[],
  handler: (event?: any) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      let isNotContained = false;

      for (const ref of refs) {
        if (!ref.current) break;

        const target = event.target;
        if (ref.current.contains(target as Node)) {
          isNotContained = false;
          break;
        } else {
          isNotContained = true;
        }
      }

      if (isNotContained) handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [refs, handler]);
};
