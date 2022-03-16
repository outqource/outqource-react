declare function useSSR(): {
    isBrowser: false | HTMLElement;
    isServer: boolean;
};
export default useSSR;
