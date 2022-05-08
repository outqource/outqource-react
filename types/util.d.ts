export declare type LowerAlphabet = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
export declare type UpperAlphabet = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
export declare type ToUpper<T extends string> = T extends 'a' ? 'A' : T extends 'b' ? 'B' : T extends 'c' ? 'C' : T extends 'd' ? 'D' : T extends 'e' ? 'E' : T extends 'f' ? 'F' : T extends 'g' ? 'G' : T extends 'h' ? 'H' : T extends 'i' ? 'I' : T extends 'j' ? 'J' : T extends 'k' ? 'K' : T extends 'l' ? 'L' : T extends 'm' ? 'M' : T extends 'n' ? 'N' : T extends 'o' ? 'O' : T extends 'p' ? 'P' : T extends 'q' ? 'Q' : T extends 'r' ? 'R' : T extends 's' ? 'S' : T extends 't' ? 'T' : T extends 'u' ? 'U' : T extends 'v' ? 'V' : T extends 'w' ? 'W' : T extends 'x' ? 'X' : T extends 'y' ? 'Y' : T extends 'z' ? 'Z' : T;
export declare type Concat<First extends string, Second extends string> = `${First}${Second}`;
export declare type CamelCaseToPascalCase<T extends keyof any> = T extends `${infer First}${infer Rest}` ? Concat<First extends LowerAlphabet ? ToUpper<First> : First, Rest> : never;
export declare type SetStatusAction<T extends keyof any> = `set${CamelCaseToPascalCase<T>}Status`;
export declare type SetDataAction<T extends keyof any> = `set${CamelCaseToPascalCase<T>}Data`;
export declare type SetErrorAction<T extends keyof any> = `set${CamelCaseToPascalCase<T>}Error`;
export declare type ClearAction<T extends keyof any> = `clear${CamelCaseToPascalCase<T>}`;
export declare type ReducerActions<T extends keyof any> = SetStatusAction<T> | SetDataAction<T> | SetErrorAction<T> | ClearAction<T>;
export declare type ReducerStateActions<T extends keyof any> = {
    [key in ReducerActions<T>]: (...args: any[]) => Promise<any> | any;
};
