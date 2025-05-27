// Original file: proto/user.proto

import type { RoleType as _user_RoleType, RoleType__Output as _user_RoleType__Output } from '../user/RoleType';

export interface Query {
  'searchKeyword'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sort'?: (string);
  'isActive'?: (boolean);
  'role'?: (_user_RoleType | null);
}

export interface Query__Output {
  'searchKeyword'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sort'?: (string);
  'isActive'?: (boolean);
  'role'?: (_user_RoleType__Output);
}
