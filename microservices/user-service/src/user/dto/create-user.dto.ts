import { IsBoolean, IsEmail, IsEnum, IsString } from "class-validator";
import { RoleType } from "../enum/role-type";

export class CreateUserDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    fullName: string;

    @IsBoolean()
    isActive: boolean;

    @IsString()
    phone: string;
    @IsString()
    avatarUrl?: string;
    @IsString()
    activeKey: string;
    @IsString()
    @IsEnum(RoleType)
    role: RoleType;
}
