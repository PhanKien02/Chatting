import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsString } from "class-validator";

export class CreateRoomDto {

        @ApiProperty()
        @IsString()
        creator_id: string;

        @ApiProperty()
        @IsString()
        name: string;

        @ApiProperty({
                isArray: true
        })
        @IsArray()
        members: number[];

        @IsBoolean()
        @ApiProperty()
        status: boolean;

        @IsBoolean()
        @ApiProperty()
        isGroup: boolean;
}
