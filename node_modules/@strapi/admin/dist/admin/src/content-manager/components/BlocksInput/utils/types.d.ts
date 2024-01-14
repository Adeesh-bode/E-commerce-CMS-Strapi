import { type Element, Node } from 'slate';
export type Block<T extends Element['type']> = Extract<Node, {
    type: T;
}>;
export declare const getEntries: <T extends object>(object: T) => [keyof T, T[keyof T]][];
export declare const getKeys: <T extends object>(object: T) => (keyof T)[];
