import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsString } from "class-validator";


export class IQuery<T> {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    searchKeyword?: string;

    @IsOptional()
    @ApiProperty({
        default: 1
    })
    @Transform(({ value }) => +value)
    page?: number;

    @IsOptional()
    @ApiProperty({
        default: 10
    })
    @Transform(({ value }) => +value)
    limit?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    sort?: { [K in keyof T]?: 1 | -1 };
}

export type IPaginated<T> = {
    datas: T[];
    limit: number,
    page: number
    totalPages: number;
    totalResults?: number;
};
