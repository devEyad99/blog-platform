import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength, IsOptional } from "class-validator";

export class UpdateCommentDto {
  @ApiProperty({example: 'The content of the comment', description: "The content of the comment"})
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  content?: string;
}