/// <reference types="react" />
import type { StrapiApp } from '../StrapiApp';
interface AdminContextValue {
    getAdminInjectedComponents: StrapiApp['getAdminInjectedComponents'];
}
declare const AdminContextProvider: {
    (props: AdminContextValue & {
        children: import("react").ReactNode;
    }): JSX.Element;
    displayName: string;
};
declare const useAdmin: () => AdminContextValue;
export { AdminContextProvider, useAdmin };
export type { AdminContextValue };
