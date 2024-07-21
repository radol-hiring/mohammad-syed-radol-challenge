/*import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
  providers: [MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule {}*/

// src/messages/messages.module.ts
/*import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Message } from './message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}

*/


// src/messages/messages.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { Message } from './message.entity'; // Import the Message entity

@Module({
  imports: [TypeOrmModule.forFeature([Message])], // Include the Message entity in TypeOrmModule
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}



