import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { UserJwtGuard } from 'src/(auth)/guard/user.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiLocaleHeader } from 'src/global/decorators/apiLocaleHeader';
import { CreateCommentDto } from './dto/createComment.dto';
import { Response } from 'express';
import { ResponseService } from 'src/global/services/response.service';
import { User } from 'src/global/decorators/user.decorator';
import { UpdateCommentDto } from './dto/updateComment.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly responseService: ResponseService
  ) {}

  @Post('create/comment/post/:postId')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth() 
  @ApiLocaleHeader()
  async createComment(
    @Param('postId') postId: string,
    @Body() comment: CreateCommentDto,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
    @User('userId') userId: string,
  ) {
    const createdComment = await this.commentsService.createComment(postId, userId, comment, locale);
    return this.responseService.created(
      res,
      'CommentCreated',
      createdComment
    );
  }

  @Get('find/comments')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async findComments(
    @Res() res: Response,
  ) {
    const comments = await this.commentsService.findComments();
    return this.responseService.success(
      res,
      'CommentFetchedSuccessfully',
      comments
    );
  }

  @Get('find/comment/:id')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async findCommentById(
    @Param('id') id: string,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
  ) {
    const comment = await this.commentsService.findCommentById(id, locale);
    return this.responseService.success(
      res,
      'CommentsFetchedSuccessfully',
      comment
    );
  }

  @Put('update/comment/:id')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async updateComment(
    @Param('id') id: string,
    @User('userId') userId: string,
    @Body() comment: UpdateCommentDto,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
  ) {
    const updatedComment = await this.commentsService.updateComment(id, userId, comment, locale);
    return this.responseService.success(
      res,
      'CommentUpdated',
      updatedComment
    );
  }

  @Delete('delete/comment/:id')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async deleteComment(
    @Param('id') id: string,
    @User('userId') userId: string,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
  ) {
    await this.commentsService.deleteComment(id, userId, locale);
    return this.responseService.success(
      res,
      'CommentDeleted',
    );
  }


}
