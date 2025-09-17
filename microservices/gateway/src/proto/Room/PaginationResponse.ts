// Original file: src/proto/room.proto

import type { Room as _room_Room, Room__Output as _room_Room__Output } from '../room/Room';

export interface PaginationResponse {
  'datas'?: (_room_Room)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}

export interface PaginationResponse__Output {
  'datas'?: (_room_Room__Output)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}
