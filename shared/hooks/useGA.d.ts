import { EventNameTypes, DataType } from '../constants/ga';
export interface GAProps {
    action: string;
    data?: {
        [key: string]: unknown;
    };
}
export default function useGA(): {
    initializeGA: () => void;
    gaEvent: <T extends EventNameTypes>(eventName: T, data: DataType[T]) => void;
    gaPV: (pagePath: string) => void;
};
