import { atom, selector, useRecoilState, useRecoilValue, RecoilRoot, AtomOptions, ReadOnlySelectorOptions, ReadWriteSelectorOptions } from 'recoil';

export type SelectorOptions<T> = ReadOnlySelectorOptions<T> | ReadWriteSelectorOptions<T>;

const createAtoms = <T extends any[]>(optionList: AtomOptions<T[number]>[]) => optionList.map(options => atom(options));

const createSelectors = <T extends any[]>(optionList: SelectorOptions<T[number]>[]) => optionList.map(options => selector(options));

export { RecoilRoot, useRecoilState, useRecoilValue, createAtoms, createSelectors };
