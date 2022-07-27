import type { ReactNode } from 'react';

export interface ModalInfo {
  className?: string;
  isOpen?: boolean;
  onClose(): void;
  [key: string]: any | ReactNode;
}

export type ModalCallbackType = (modal: ModalInfo) => void;
