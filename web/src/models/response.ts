export interface ErrorResponse {
    message: string | string[],
    error: string,
    statusCode: number,
    timestamp: string,
    path: string
}

export interface ApiResponse<T> {
    data: T,
    status: number;
    message: string
}