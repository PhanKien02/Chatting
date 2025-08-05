import { IsEmail, IsString } from "class-validator";
import { RoleType } from "../enum/role-type";

export class CreateUserDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    fullName: string;

    @IsString()
    phone: string;

    @IsString()
    avatarUrl?: string;


    role: RoleType;
}
