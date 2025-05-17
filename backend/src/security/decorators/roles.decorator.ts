import { RoleType } from '@/modules/user/entities/role-type';
import { SetMetadata } from '@nestjs/common';

export const Role = (role: RoleType[]): any => SetMetadata('role', role);
