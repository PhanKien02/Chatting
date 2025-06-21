import { IsEnum, IsString } from "class-validator";
import { RoleType } from "../enum/role-type";

export class LoginDto {
        @IsString()
        login: string;

        @IsString()
        password: string;


        @IsString()
        @IsEnum(RoleType)
        role: RoleType;
}