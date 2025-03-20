import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentRepository } from './helper/comment.repository';
import { ResponseService } from 'src/global/services/response.service';
import { UserJwtStrategy } from 'src/(auth)/strategy/user.jwt.strategy';
import { PostsModule } from 'src/(posts)/posts.module';

@Module({
  imports: [PostsModule],
  providers: [
    CommentsService, 
    PrismaService,
    CommentRepository,
    ResponseService,
    UserJwtStrategy
  ],
  controllers: [CommentsController]
})
export class CommentsModule {}
