import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export type IPaginated<T> = {
        datas: T[];
        limit: number;
        page: number;
        totalPages: number;
        totalResults?: number;
};
export class IQuery<T> {
        @IsOptional()
        @IsString()
        @ApiProperty({
                required: false,
        })
        searchKeyword?: string;

        @IsOptional()
        @ApiProperty({
                required: false,
        })
        @Transform(({ value }) => +value)
        page: number;

        @IsOptional()
        @ApiProperty({
                required: false,
        })
        @Transform(({ value }) => +value)
        limit: number;

        @IsOptional()
        @ApiProperty({
                required: false,
        })
        sort?: { [K in keyof T]?: 1 | -1 };
}
export const buildFilterSortAndPaginate = <T>(query: IQuery<T>) => {
        const { limit, page, sort, searchKeyword, ...rest } = query;
        let filter: { $text?: { $search: string } } = {};
        if (searchKeyword) {
                filter.$text = { $search: searchKeyword };
        }
        if (rest) {
                filter = { ...filter, ...rest };
        }

        return {
                filter,
                sort: { ...sort, created_at: -1 },
                limit: limit || 10,
                skip: (page - 1) * query.limit || 0,
                page: page || 1,
        };
};

export const paginateResponse = <T>({ datas, page, limit, totalResults }): IPaginated<T> => {
        return {
                datas,
                page: page || 1,
                limit: limit || 10,
                totalPages: Math.ceil(totalResults / (limit || 10)),
                totalResults,
        };
};
