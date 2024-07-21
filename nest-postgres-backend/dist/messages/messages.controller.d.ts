import { MessagesService } from './messages.service';
import { Message } from './message.entity';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    findAll(): Promise<Message[]>;
}
