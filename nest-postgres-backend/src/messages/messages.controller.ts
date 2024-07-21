/*import { Controller } from '@nestjs/common';

@Controller('messages')
export class MessagesController {}*/

import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async findAll(): Promise<Message[]> {
    return this.messagesService.findAll();
  }
}

/*import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class MessagesController {
    @Get()
    findAll(): string {
        return 'This action returns all posts';
    }
}*/



