import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ActiveOTPDto {
        @IsString()
        @IsNotEmpty()
        @ApiProperty()
        token: string;

        @IsString()
        @IsNotEmpty()
        @ApiProperty()
        otp: string;
}

export class ReActive {
        @IsString()
        @IsNotEmpty()
        @ApiProperty()
        idUser: number
}