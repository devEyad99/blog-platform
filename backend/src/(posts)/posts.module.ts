import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostRepository } from './helper/post.repository';
import { ResponseService } from 'src/global/services/response.service';
import { UserJwtStrategy } from 'src/(auth)/strategy/user.jwt.strategy';

@Module({
  providers: [
    PostsService, 
    PrismaService,
    PostRepository,
    ResponseService,
    UserJwtStrategy,
  ],
  controllers: [PostsController]
})
export class PostsModule {}
