export interface ErrorResponse {
    message: string | string[];
    error: string;
    statusCode: number;
    timestamp: string;
    path: string;
}

export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

export interface PaginationResponse<T> {
    datas: T[];
    limit: number;
    page: number;
    totalResults: number;
}

export interface IQuery<T> {
    searchKeyword?: string;

    page?: number;

    limit?: number;

    sort?: { [K in keyof T]?: 1 | -1 };
}
