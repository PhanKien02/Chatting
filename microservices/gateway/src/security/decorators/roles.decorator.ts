import { RoleType } from '@/modules/user/enum/role-type';
import { SetMetadata } from '@nestjs/common';

export const Role = (role: RoleType[]): any => SetMetadata('role', role);
