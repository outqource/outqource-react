export declare type Status = 'idle' | 'loading' | 'ready' | 'error';
export declare type ScriptElt = HTMLScriptElement | null;
declare function useScript(src: string): Status;
export default useScript;
