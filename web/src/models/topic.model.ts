import { IBaseModel } from './base.model';
export interface ITopic extends IBaseModel {
    name: string;
    color: string;
}

export interface ITopicsResponse {
    data: ITopic[];
    limit: number;
    page: number;
    totalResults: number;
}

export interface ITopicPayload {
    name: string;
    color: string;
}
