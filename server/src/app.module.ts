import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { Post } from './post/post.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    // Everyone update this according to their own database 
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'MySql97531!',
    database: 'ariyeh_memorial',
    entities: [Post],
    synchronize: true,
  }),
    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
