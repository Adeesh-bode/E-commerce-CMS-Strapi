import * as React from 'react';
import { DefaultTheme } from 'styled-components';
interface ThemeToggleProviderProps {
    children: React.ReactNode;
    themes: {
        light: DefaultTheme;
        dark: DefaultTheme;
    };
}
declare const ThemeToggleProvider: ({ children, themes }: ThemeToggleProviderProps) => import("react/jsx-runtime").JSX.Element;
export { ThemeToggleProvider };
export type { ThemeToggleProviderProps };
