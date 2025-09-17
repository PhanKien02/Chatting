// Original file: src/proto/room.proto

import type { Member as _room_Member, Member__Output as _room_Member__Output } from '../room/Member';

export interface Room {
  'id'?: (string);
  'creatorId'?: (string);
  'members'?: (_room_Member)[];
  'status'?: (string);
  'type'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
}

export interface Room__Output {
  'id'?: (string);
  'creatorId'?: (string);
  'members'?: (_room_Member__Output)[];
  'status'?: (string);
  'type'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
}
