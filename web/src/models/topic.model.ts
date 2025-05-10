import { IBaseModel } from './base.model';
export interface ITopic extends IBaseModel {
    name: string;
    color: string;
}

export interface ITopicPayload {
    name: string;
    color: string;
}
