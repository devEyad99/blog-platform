import { Injectable } from '@nestjs/common';
import { PostRepository } from './helper/post.repository';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { ResponseMessages } from 'src/global/helper/respoonse.message';
import { PostResponseService } from './post.response';

@Injectable()
export class PostsService {
  constructor(
    private readonly postRespository: PostRepository,
  ) {}

  async createPost(data: CreatePostDto, authorId: string) {
    return this.postRespository.createPost({
      ...data,
      authorId
    });
  }

  async findPostById(id: string, locale: Locale) {
    const post = await this.postRespository.findPostById(id);
    if(!post) {
      return ResponseMessages(PostResponseService, 'postNotFound', locale);
    }
    return post;
  }

  async findPosts() {
    return this.postRespository.findPosts();
  }

  private async ValidatePost(id: string, userId: string, locale: Locale) {
    const post = await this.findPostById(id, locale);
    if(post?.authorId !== userId) {
      return ResponseMessages(PostResponseService, 'postNotBelongToYou', locale)
    }
  }

  async updatePost(id: string, data: UpdatePostDto, userId: string, locale: Locale) {
   await this.ValidatePost(id, userId, locale);
    return this.postRespository.updatePost(id, data);
  }

  async deletePost(id: string, userId: string, locale: Locale) {
    await this.ValidatePost(id, userId, locale);
    return this.postRespository.deletePost(id);
  }
}
