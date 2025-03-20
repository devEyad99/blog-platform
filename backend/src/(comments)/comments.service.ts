import { Injectable } from '@nestjs/common';
import { CommentRepository } from './helper/comment.repository';
import { CreateCommentDto } from './dto/createComment.dto';
import { ResponseMessages } from 'src/global/helper/respoonse.message';
import { CommentResponseService } from './comment.response';
import { UpdateCommentDto } from './dto/updateComment.dto';
import { PostsService } from 'src/(posts)/posts.service';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly postsService: PostsService,
  ) {}

  async createComment(postId: string, authorId: string, data: CreateCommentDto, locale: Locale) {
    await this.postsService.findPostById(postId, locale);
    return this.commentRepository.createComment({
      ...data,
      postId,
      authorId
    });
  }

  async findCommentById(id: string, locale: Locale) {
    const comment = await this.commentRepository.findCommentById(id);
    if(!comment) {
      return ResponseMessages(CommentResponseService, 'CommentNotFound', locale);
    }
    return comment;
  }

  async findComments() {
    return this.commentRepository.findComments();
  }

  private async validateComment(commentId: string, userId: string, locale: Locale) {
    const comment = await this.commentRepository.findCommentById(commentId);
    if(comment.authorId !== userId) {
      return ResponseMessages(CommentResponseService, 'NotCommentOwner', locale);
    }
    return comment;
  }

  async updateComment(commentId: string, userId: string, data: UpdateCommentDto, locale: Locale) {
     await this.validateComment(commentId, userId, locale);
    return this.commentRepository.updateComment(commentId, data);
  }

  async deleteComment(commentId: string, userId: string, locale: Locale) {
    await this.validateComment(commentId, userId, locale);
    return this.commentRepository.deleteComment(commentId);
  }
}
