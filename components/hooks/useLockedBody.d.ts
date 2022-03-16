declare type ReturnType = [boolean, (locked: boolean) => void];
declare function useLockedBody(rootName?: string, initialLocked?: boolean): ReturnType;
export default useLockedBody;
