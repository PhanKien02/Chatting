import { IsEmail, IsString } from "class-validator";

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

}
