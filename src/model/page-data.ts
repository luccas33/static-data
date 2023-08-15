import { PageDataItem } from "./page-data-item";

export interface PageData {
    path: string,
    redirectPath: string,
    template?: string,
    itens: PageDataItem[]
}