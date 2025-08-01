// Original file: src/proto/project.proto


export interface Query {
  'searchKeyword'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sort'?: (string);
  'isActive'?: (boolean);
}

export interface Query__Output {
  'searchKeyword'?: (string);
  'page'?: (number);
  'limit'?: (number);
  'sort'?: (string);
  'isActive'?: (boolean);
}
