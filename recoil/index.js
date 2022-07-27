import { atom, selector, useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
var createAtoms = function (optionList) { return optionList.map(function (options) { return atom(options); }); };
var createSelectors = function (optionList) { return optionList.map(function (options) { return selector(options); }); };
export { RecoilRoot, useRecoilState, useRecoilValue, createAtoms, createSelectors };
//# sourceMappingURL=index.js.map