// Original file: src/proto/room.proto

import type { Room as _Room_Room, Room__Output as _Room_Room__Output } from '../Room/Room';

export interface PaginationResponse {
  'datas'?: (_Room_Room)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}

export interface PaginationResponse__Output {
  'datas'?: (_Room_Room__Output)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}
