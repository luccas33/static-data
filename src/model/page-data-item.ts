export interface PageDataItem {
    id?: string
    title: string,
    description: string,
    infos?: {[k: string]: string},
    remove?: boolean,
    urls?: string[]
}