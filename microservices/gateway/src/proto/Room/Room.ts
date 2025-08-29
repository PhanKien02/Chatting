// Original file: src/proto/room.proto

import type { Member as _Room_Member, Member__Output as _Room_Member__Output } from '../Room/Member';

export interface Room {
  'id'?: (string);
  'creatorId'?: (string);
  'members'?: (_Room_Member)[];
  'status'?: (string);
  'type'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
}

export interface Room__Output {
  'id'?: (string);
  'creatorId'?: (string);
  'members'?: (_Room_Member__Output)[];
  'status'?: (string);
  'type'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
}
