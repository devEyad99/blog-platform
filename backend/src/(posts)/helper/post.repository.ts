import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PostRepository {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async createPost(data: any) {
    return this.prismaService.post.create({
      data
    });
  }

  async findPostById(id: string) {
    return this.prismaService.post.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: { // Include the author relation
          select: {
            name: true, // Select the author's name
          },
        },
        comments: {
          select: {
            id: true,
            content: true,
            author: { // Include the author relation for comments
              select: {
                name: true, // Select the comment author's name
              },
            },
          },
        },
      },
    });
  }

  async findPosts() {
    return this.prismaService.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: { // Include the author relation
          select: {
            name: true, // Select the author's name
          },
        },
      },
    });
  }

  async updatePost(id: string, data: any) {
    return this.prismaService.post.update({
      where: {
        id
      },
      data
    });
  }

  async deletePost(id: string) {
    return this.prismaService.post.delete({
      where: {
        id
      }
    });
  }
}