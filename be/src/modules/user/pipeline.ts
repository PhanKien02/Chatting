import { IQuery } from "@/interfaces/paging.interface";
import { buildFilterSortAndPaginate } from "@/utils/buildFilterSortAndPaginate";
import { User } from "./entities/user.entity";

export const adminGetAllUser = (query : IQuery<User>) => {
    const { filter, limit, page, sort } = buildFilterSortAndPaginate(query);
    const pipeline = [
        {
            $match: filter
        },
        {
            $sort: sort
        },
        {
            $skip: (page - 1) * limit
        },
        {
            $limit: limit
        },
    ];

    return pipeline;
}