// Original file: proto/auth.proto

import type { Long } from '@grpc/proto-loader';

export interface RegisterResponse {
  'idUser'?: (number | string | Long);
  'email'?: (string);
  'phone'?: (string);
  'isActive'?: (string);
  'role'?: (string);
  'tokenActive'?: (string);
}

export interface RegisterResponse__Output {
  'idUser'?: (Long);
  'email'?: (string);
  'phone'?: (string);
  'isActive'?: (string);
  'role'?: (string);
  'tokenActive'?: (string);
}
