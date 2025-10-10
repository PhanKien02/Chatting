import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsString } from "class-validator";

export class CreateConversationDto {

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
        isGroup: boolean;
}
