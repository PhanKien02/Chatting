// Original file: src/proto/auth.proto

import type { Long } from '@grpc/proto-loader';

export interface Register {
  'idUser'?: (number | string | Long);
  'email'?: (string);
  'phone'?: (string);
  'password'?: (string);
  'role'?: (string);
  'fullName'?: (string);
  'avatarUrl'?: (string);
}

export interface Register__Output {
  'idUser'?: (Long);
  'email'?: (string);
  'phone'?: (string);
  'password'?: (string);
  'role'?: (string);
  'fullName'?: (string);
  'avatarUrl'?: (string);
}
