// Original file: proto/auth.proto

import type { Long } from '@grpc/proto-loader';

export interface LoginResponse {
  'userId'?: (number | string | Long);
  'accessToken'?: (string);
  'refreshToken'?: (string);
  'expires'?: (string);
}

export interface LoginResponse__Output {
  'userId'?: (Long);
  'accessToken'?: (string);
  'refreshToken'?: (string);
  'expires'?: (string);
}
