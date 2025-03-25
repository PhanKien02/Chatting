import { Types } from 'mongoose';
export const convertToObjectId = (id: string): any => new Types.ObjectId(id)