// Original file: src/proto/room.proto


export interface CreateRoomRequest {
  'creatorId'?: (string);
  'members'?: (string)[];
  'isGroup'?: (boolean);
  'name'?: (string);
}

export interface CreateRoomRequest__Output {
  'creatorId'?: (string);
  'members'?: (string)[];
  'isGroup'?: (boolean);
  'name'?: (string);
}
