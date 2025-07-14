import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@/security/guards/auth.guard';
import { multerOptions } from '@/interceptor/multer.config';


@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }
  @ApiOperation({ summary: 'Upload image to Cloudinary' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        forder: {
          type: 'string',
        }
      },
      required: ["file", 'forder'
      ]
    },
  })
  @Post()
  @UseGuards(AuthGuard) // Bảo vệ bằng JWT
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Body() body: { forder: string }) {
    const result = await this.uploadService.uploadImage(file, body.forder);
    return {
      url: result.secure_url,
      publicId: result.public_id,
      resource_type: result.resource_type,
      display_name: result.display_name,
      format: result.format
    };
  }
}
