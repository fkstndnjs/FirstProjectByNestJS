import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsUrl,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateCatDto {
  @ApiProperty({
    example: 'SeokHyun Yu',
    description: 'name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUrl()
  @IsOptional()
  imgUrl: string;
}
