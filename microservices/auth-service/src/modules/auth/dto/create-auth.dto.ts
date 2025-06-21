import { IsEnum, IsString } from "class-validator";
import { RoleType } from "../enum/role-type";

export class RegisterDto {
        @IsString()
        idUser: number;

        @IsString()
        email: string;

        @IsString()
        phone: string;


        @IsString()
        fullName: string;


        @IsString()
        avatarUrl: string;

        @IsString()
        password: string;

        @IsString()
        @IsEnum(RoleType)
        role: RoleType;
}
