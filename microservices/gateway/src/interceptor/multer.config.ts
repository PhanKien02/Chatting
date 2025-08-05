import { BadRequestException } from '@nestjs/common';

export const multerOptions = {
        limits: {
                fileSize: 2 * 1024 * 1024, // 2MB
        },
        fileFilter: (req, file, callback) => {
                const allowedMimeTypes = [
                        // Ảnh
                        'image/jpeg',
                        'image/png',
                        'image/webp',
                        'image/svg+xml',
                        // Tài liệu
                        'application/pdf',
                        'application/msword', // .doc
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
                        // Bảng
                        'text/csv',
                        'application/vnd.ms-excel', // .xls
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
                        'application/vnd.oasis.opendocument.spreadsheet', // .ods
                        // Ebook
                        'application/epub+zip',
                ];

                if (!allowedMimeTypes.includes(file.mimetype)) {
                        return callback(
                                new BadRequestException(
                                        `File type ${file.mimetype} is not allowed.`
                                ),
                                false
                        );
                }
                callback(null, true);
        },
};
