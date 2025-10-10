import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) { }
export class UserUpdatePayLoad {
        id: string;
        user: UpdateUserDto
}

export class UserUpdatedRes {
        success: boolean
}