// Original file: src/proto/project.proto

import type { ProjectFindAll as _project_ProjectFindAll, ProjectFindAll__Output as _project_ProjectFindAll__Output } from '../project/ProjectFindAll';

export interface PaginationResponse {
  'datas'?: (_project_ProjectFindAll)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}

export interface PaginationResponse__Output {
  'datas'?: (_project_ProjectFindAll__Output)[];
  'page'?: (number);
  'limit'?: (number);
  'totalPages'?: (number);
  'totalResults'?: (number);
}
