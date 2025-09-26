// Original file: src/proto/room.proto


export interface Room {
  '_id'?: (string);
  'name'?: (string);
  'isGroup'?: (boolean);
  'members'?: (string)[];
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
  'status'?: (boolean);
}

export interface Room__Output {
  '_id'?: (string);
  'name'?: (string);
  'isGroup'?: (boolean);
  'members'?: (string)[];
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'deletedAt'?: (string);
  'status'?: (boolean);
}
