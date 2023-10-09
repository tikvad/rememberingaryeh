import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Post } from './post/post.entity';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV || 'development'}.local`,
        `.env.${process.env.NODE_ENV || 'development'}`,
        '.env.local',
        '.env',
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: process.env.DB_LOGGING && JSON.parse(process.env.DB_LOGGING),
      synchronize:
        process.env.DB_SYNCHRONIZE && JSON.parse(process.env.DB_SYNCHRONIZE),
      charset: 'utf8mb4',
      ssl: process.env.DB_SSL_CA
        ? { rejectUnauthorized: false, ca: readFileSync(process.env.DB_SSL_CA) }
        : { rejectUnauthorized: false },
      entities: [Post],
    }),

    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
