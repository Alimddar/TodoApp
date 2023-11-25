import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './mail/mail.service';
import { CommentsModule } from './comments/comments.module';
import { TaskTagModule } from './task-tag/task-tag.module';
import { SubtaskModule } from './subtask/subtask.module';
import { CollaborationModule } from './collaboration/collaboration.module';
import { TaskAttachmentModule } from './task-attachment/task-attachment.module';
import { Subtask } from './subtask/entities/subtask.entity';
import { TaskAttachment } from './task-attachment/entities/task-attachment.entity';
import { Comment } from './comments/entities/comment.entity';
import { TaskTag } from './task-tag/entities/task-tag.entity';
import { Collaboration } from './collaboration/entities/collaboration.entity';

@Module({
  imports: [
    UsersModule,
    TasksModule,
    CommentsModule,
    TaskTagModule,
    SubtaskModule,
    CollaborationModule,
    TaskAttachmentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'todo_db',
      entities: [User, Task, Comment, Subtask, TaskAttachment, TaskTag, Collaboration],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
