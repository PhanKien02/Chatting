export interface IResponseRabbitmq<T> {
        success: boolean,
        message: string | T
}