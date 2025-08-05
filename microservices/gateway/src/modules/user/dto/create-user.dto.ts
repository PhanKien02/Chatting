import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
        @IsString()
        @IsEmail()
        @ApiProperty({
                default: 'admin@gmail.com',
        })
        email: string;

        @IsString()
        @ApiProperty({
                default: 'admin@gmail.com',
        })
        fullName: string;

        @IsString()
        @ApiProperty({
                default: '0374824645',
        })
        phone: string;

        @IsString()
        @ApiProperty({
                default: 'http://localhost:3000/avatar',
                required: false,
        })
        avatarUrl?: string;
}
