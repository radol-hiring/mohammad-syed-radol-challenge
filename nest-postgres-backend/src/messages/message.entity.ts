// src/messages/message.entity.ts
/*import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
}
*/

// src/messages/message.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  content: string;

  // Add more columns as per your messages table structure
}





