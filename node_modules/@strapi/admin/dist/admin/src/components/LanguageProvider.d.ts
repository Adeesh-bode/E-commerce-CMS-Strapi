import * as React from 'react';
interface LocalesContextValue {
    changeLocale: (locale: keyof State['localeNames']) => void;
    localeNames: Record<string, string>;
}
declare const useLocales: () => LocalesContextValue;
declare const LANGUAGE_LOCAL_STORAGE_KEY = "strapi-admin-language";
interface LanguageProviderProps {
    children: React.ReactNode;
    localeNames: Record<string, string>;
    messages: Record<string, Record<string, string>>;
}
declare const LanguageProvider: ({ children, localeNames, messages }: LanguageProviderProps) => import("react/jsx-runtime").JSX.Element;
interface State {
    localeNames: Record<string, string>;
    locale: keyof State['localeNames'];
}
export { LanguageProvider, useLocales, LANGUAGE_LOCAL_STORAGE_KEY };
export type { LanguageProviderProps, LocalesContextValue };
