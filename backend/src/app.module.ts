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

@Module({
  imports: [
    UsersModule,
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'todo_db',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'todo_db',
      entities: [User, Task],
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
