import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength, IsOptional } from "class-validator";

export class UpdatePostDto {
  @ApiProperty({example: 'Title of the post', description: "The title of the post"})
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  title?: string;

  @ApiProperty({example: 'The content of the post', description: "The content of the post"})
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content?: string;
}