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

        @ApiProperty({ type: 'string', format: 'binary', description: 'File ảnh avatar mới (tuỳ chọn)' })
        avatarUrl?: string;
}
