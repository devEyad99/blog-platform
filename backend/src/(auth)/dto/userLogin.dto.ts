import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UserLoginDto {
  @ApiProperty({example: 'hi@hi.com', description: "enter your email"})
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    @IsEmail()
    email: string;

  @ApiProperty({example: 'password', description: "enter your password"})
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(25)
  password: string;
}