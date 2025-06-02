import { IsEmail, IsEnum, IsString } from "class-validator";
import { RoleType } from "../enum/role-type";

export class CreateUserDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    fullName: string;

    @IsString()
    phone: string;

    @IsString()
    avatarUrl?: string;

    @IsString()
    @IsEnum(RoleType)
    role: RoleType;
}
