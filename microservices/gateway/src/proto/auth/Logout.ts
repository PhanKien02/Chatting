// Original file: src/proto/auth.proto

import type { Long } from '@grpc/proto-loader';

export interface Logout {
  'idUser'?: (number | string | Long);
}

export interface Logout__Output {
  'idUser'?: (Long);
}
