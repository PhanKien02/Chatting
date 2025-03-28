import { IBaseModel } from './base.model';
export interface ITopic extends IBaseModel {
    name: string;
    color: string;
}

export interface ITopicsResponse {
    bookings: ITopic[];
    limit: number;
    page: number;
    total: number;
}
