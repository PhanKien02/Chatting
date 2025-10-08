import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, CropMode, UploadApiResponse } from 'cloudinary';
import toStream = require('buffer-to-stream');
type UploadPayloaid = {
        file: Express.Multer.File,
        forder: string,
        fileName?: string
        width?: number,
        height?: number,
        crop?: CropMode
}
@Injectable()
export class UploadService {
        constructor() {
                cloudinary.config({
                        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                        api_key: process.env.CLOUDINARY_API_KEY,
                        api_secret: process.env.CLOUDINARY_API_SECRET,
                });
        }

        async uploadImage(
                { file, forder = "default", fileName, crop, height, width }: UploadPayloaid
        ): Promise<UploadApiResponse> {
                return new Promise((resolve, reject) => {
                        const uploadStream = cloudinary.uploader.upload_stream(
                                {
                                        folder: forder,
                                        public_id: fileName || Date.now().toString(),
                                        overwrite: true,
                                        transformation: [
                                                { width: width || 300, height: height || 300, crop: crop || 'fill' },
                                                { quality: 'auto:best', fetch_format: 'webp' },
                                        ],
                                        unique_filename: true,
                                },
                                (error, result) => {
                                        if (error) return reject(error);
                                        if (!result)
                                                return reject(
                                                        new Error(
                                                                'No result returned from Cloudinary'
                                                        )
                                                );
                                        resolve(result);
                                }
                        );
                        toStream(file.buffer).pipe(uploadStream);
                });
        }
}
