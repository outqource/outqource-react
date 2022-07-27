import { useRecoilState, useRecoilValue, RecoilRoot, AtomOptions, ReadOnlySelectorOptions, ReadWriteSelectorOptions } from 'recoil';
export declare type SelectorOptions<T> = ReadOnlySelectorOptions<T> | ReadWriteSelectorOptions<T>;
declare const createAtoms: <T extends any[]>(optionList: AtomOptions<T[number]>[]) => import("recoil").RecoilState<T[number]>[];
declare const createSelectors: <T extends any[]>(optionList: SelectorOptions<T[number]>[]) => import("recoil").RecoilValueReadOnly<T[number]>[];
export { RecoilRoot, useRecoilState, useRecoilValue, createAtoms, createSelectors };
