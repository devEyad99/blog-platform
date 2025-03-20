import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CommentRepository {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async createComment(data: any) {
    return this.prismaService.comment.create({
      data
    });
  }

  async findCommentById(id: string) {
    return this.prismaService.comment.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        content: true,
        postId: true,
        authorId: true,
      }
    });
  }

  async findComments() {
    return this.prismaService.comment.findMany({
      select: {
        id: true,
        content: true,
        postId: true
      }
    });
  }

  async updateComment(id: string, data: any) {
    return this.prismaService.comment.update({
      where: {
        id
      },
      data
    });
  }

  async deleteComment(id: string) {
    return this.prismaService.comment.delete({
      where: {
        id
      }
    });
  }
}