/// <reference types="react" />
import { DefaultTheme } from 'styled-components';
type ThemeName = 'light' | 'dark' | 'system';
type NonSystemThemeName = Exclude<ThemeName, 'system'>;
interface ThemeToggleContextContextValue {
    currentTheme?: ThemeName;
    onChangeTheme?: (nextTheme: ThemeName) => void;
    themes?: {
        dark: DefaultTheme;
        light: DefaultTheme;
    };
    systemTheme?: NonSystemThemeName;
}
declare const ThemeToggleContextProvider: {
    (props: ThemeToggleContextContextValue & {
        children: import("react").ReactNode;
    }): JSX.Element;
    displayName: string;
};
declare const useThemeToggle: () => ThemeToggleContextContextValue;
export { ThemeToggleContextProvider, useThemeToggle };
export type { ThemeName, NonSystemThemeName, ThemeToggleContextContextValue };
