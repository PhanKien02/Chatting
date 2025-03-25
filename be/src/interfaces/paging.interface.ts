
export interface IQuery<T> {
    searchKeyword: string,
    page: number,
    limit: number,
    sort: { [k in keyof T]: 1 | -1 }
}


export type IPaginated<T> = {
    data: T[];
    limit: number,
    page: number
    totalPages: number;
    totalResults?: number;
};
