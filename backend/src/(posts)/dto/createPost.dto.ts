import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class CreatePostDto {
  @ApiProperty({example: 'Title of the post', description: "The title of the post"})
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @ApiProperty({example: 'The content of the post', description: "The content of the post"})
  @IsString()
  @IsNotEmpty()
  content: string;
}