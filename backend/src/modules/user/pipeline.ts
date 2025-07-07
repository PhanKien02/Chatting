import { IQuery } from "@/interfaces/paging.interface";
import { buildFilterSortAndPaginate } from "@/utils/buildFilterSortAndPaginate";
import { User } from "./entities/user.entity";

export const getAllUser = (query: IQuery<User>) => {
    const { filter, limit, page, sort, skip } = buildFilterSortAndPaginate(query);
    const pipeline = [
        {
            $match: filter
        },
        {
            $project: {
                password: 0,
                __v: 0
            }
        },
        {
            $group: {
                _id: null,
                data: { $push: '$$ROOT' },
                totalResults: { $sum: 1 },
            },
        },
        {
            $project: {
                totalResults: 1,
                data: { $slice: ['$data', skip, limit] }, // Ensure `skip` and `pageLimit` are defined
            },
        },
    ];

    return pipeline;
}