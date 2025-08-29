// Original file: src/proto/room.proto


export interface Query {
  'searchKeyword'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sort'?: (string);
}

export interface Query__Output {
  'searchKeyword'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sort'?: (string);
}
