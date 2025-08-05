// Original file: src/proto/auth.proto

import type { Long } from '@grpc/proto-loader';

export interface RefreshToken {
        idUser?: number | string | Long;
}

export interface RefreshToken__Output {
        idUser?: Long;
}
