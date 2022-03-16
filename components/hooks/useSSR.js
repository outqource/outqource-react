function useSSR() {
    var isDOM = typeof window !== 'undefined' && window.document && window.document.documentElement;
    return {
        isBrowser: isDOM,
        isServer: !isDOM,
    };
}
export default useSSR;
//# sourceMappingURL=useSSR.js.map