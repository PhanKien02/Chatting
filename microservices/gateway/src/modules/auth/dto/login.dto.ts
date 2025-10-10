import { IUser } from '@/interfaces/user.interface';
import { RoleType } from '@/modules/user/enum/role-type';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, } from 'class-validator';

export class LoginDto {
        @IsString()
        @IsNotEmpty()
        @ApiProperty({
                default: '0374824645',
        })
        @IsString()
        login: string;

        @IsString()
        @IsNotEmpty()
        @ApiProperty({ default: 'admin' })
        password: string;

        @IsString()
        @IsNotEmpty()
        @ApiProperty({
                enum: RoleType,
                default: RoleType.ADMIN,
        })
        role: string;
}

export interface PayLoadToken {
        userId: number;
        role: string;
}

export class RefreshTokenDto {
        @ApiProperty()
        @IsString()
        token: string;
}

export class LoginResponse {
        user: IUser;
        accessToken: string;
        refreshToken: string
}

export class FindOnePayLoad {
        idUser: number
}