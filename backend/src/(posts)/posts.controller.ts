import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ResponseService } from 'src/global/services/response.service';
import { UserJwtGuard } from 'src/(auth)/guard/user.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiLocaleHeader } from 'src/global/decorators/apiLocaleHeader';
import { CreatePostDto } from './dto/createPost.dto';
import { User } from 'src/global/decorators/user.decorator';
import { Response } from 'express';
import { ResponseMessages } from 'src/global/helper/respoonse.message';
import { PostResponseService } from './post.response';
import { UpdatePostDto } from './dto/updatePost.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly responseService: ResponseService,
  ) {}

  @Post('create/post')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth() 
  @ApiLocaleHeader()
  async createPost(
    @Body() body: CreatePostDto,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
    @User('userId') userId: string,
  ) {
    const post = await this.postsService.createPost(body, userId);
    return this.responseService.created(
      res,
      ResponseMessages(PostResponseService, 'postCreated', locale),
      post
    );
  }

  @Get('find/posts')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async findPosts(
    @Headers('locale') locale: Locale,
    @Res() res: Response,
  ) {
    const post = await this.postsService.findPosts();
    return this.responseService.success(
      res,
      ResponseMessages(PostResponseService, 'postFecthecSuccessfully', locale),
      post
    );
  }

  @Get('find/post/:id')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async findPostById(
    @Param('id') id: string,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
  ) {
    const post = await this.postsService.findPostById(id, locale);
    return this.responseService.success(
      res,
      ResponseMessages(PostResponseService, 'postFecthecSuccessfully', locale),
      post
    );
  }

  @Put('update/post/:id')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async updatePost(
    @User('userId') userId: string,
    @Param('id') id: string,
    @Body() body: UpdatePostDto,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
  ) {
    const updatedPost = await this.postsService.updatePost(id, body, userId, locale);
    return this.responseService.success(
      res,
      ResponseMessages(PostResponseService, 'postUpdatedSuccessfully', locale),
      updatedPost
    );
  }

  @Delete('delete/post/:id')
  @UseGuards(UserJwtGuard)
  @ApiBearerAuth()
  @ApiLocaleHeader()
  async deletePost(
    @User('userId') userId: string,
    @Param('id') id: string,
    @Headers('locale') locale: Locale,
    @Res() res: Response,
  ) {
    await this.postsService.deletePost(id, userId, locale);
    return this.responseService.success(
      res,
      ResponseMessages(PostResponseService, 'postdeletedSuccessfully', locale),
    );
  }

}
