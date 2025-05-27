// Original file: src/proto/user.proto

import type { RoleType as _user_RoleType, RoleType__Output as _user_RoleType__Output } from '../user/RoleType';

export interface User {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'fullName'?: (string);
  'isActive'?: (boolean);
  'phone'?: (string);
  'avatarUrl'?: (string);
  'role'?: (_user_RoleType | null);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
}

export interface User__Output {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'fullName'?: (string);
  'isActive'?: (boolean);
  'phone'?: (string);
  'avatarUrl'?: (string);
  'role'?: (_user_RoleType__Output);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
}
