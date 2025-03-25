import { IPaginated } from "@/interfaces/paging.interface";

export const paginateResponse = <T>({ data, page, limit, totalResults }): IPaginated<T> => {
    return {
        data,
        page: page || 1,
        limit: limit || 10,
        totalPages: Math.ceil(totalResults / (limit || 10)),
        totalResults,
    };
};