export declare type ValueOf<T extends Object> = T[keyof T];
export declare const GA_EVENT_NAMES: {
    readonly LANGUAGE_CHANGED: "language-changed";
    readonly THEME_CHANGED: "theme-changed";
    readonly TODO_CHANGED: "todo-changed";
};
export declare type DataType = {
    [GA_EVENT_NAMES.LANGUAGE_CHANGED]: {
        lang: string;
    };
    [GA_EVENT_NAMES.THEME_CHANGED]: {
        theme: string;
    };
    [GA_EVENT_NAMES.TODO_CHANGED]: {
        checked: string;
    };
    [key: string]: unknown;
};
export declare type EventNameTypes = ValueOf<typeof GA_EVENT_NAMES>;
