import { type BaseEditor, Path, Editor } from 'slate';
interface LinkEditor extends BaseEditor {
    lastInsertedLinkPath: Path | null;
}
declare const withLinks: (editor: Editor) => Omit<BaseEditor & import("slate-react").ReactEditor & import("slate-history").HistoryEditor & LinkEditor, "children"> & {
    children: import("@strapi/types/dist/types/core/attributes").BlocksValue;
};
export { withLinks, type LinkEditor };
