import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateConversationDto } from './create-conversation.dto';
import { IsString } from 'class-validator';

export class UpdateConversationDto extends PartialType(CreateConversationDto) {
        @IsString()
        @ApiProperty()
        _id: string
}
