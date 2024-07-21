import { Repository } from 'typeorm';
import { Message } from './message.entity';
export declare class MessagesService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    findAll(): Promise<Message[]>;
}
