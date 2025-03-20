import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class CreateCommentDto {
  @ApiProperty({example: 'The content of the comment', description: "The content of the comment"})
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  content: string;
}