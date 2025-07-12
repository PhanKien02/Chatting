import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class UploadService {
        constructor() {
                cloudinary.config({
                        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                        api_key: process.env.CLOUDINARY_API_KEY,
                        api_secret: process.env.CLOUDINARY_API_SECRET,
                });
        }

        async uploadImage(file: Express.Multer.File, forder: string = 'default'): Promise<UploadApiResponse> {
                return new Promise((resolve, reject) => {
                        const uploadStream = cloudinary.uploader.upload_stream(
                                { folder: forder },
                                (error, result) => {
                                        if (error) return reject(error);
                                        if (!result) return reject(new Error('No result returned from Cloudinary'));
                                        resolve(result);
                                },
                        );
                        toStream(file.buffer).pipe(uploadStream);
                });
        }
}
