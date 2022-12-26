import { ApiProperty, ApiQuery } from '@nestjs/swagger';
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
    description: '이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '1234',
    description: '비밀번호',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'fkstndnjs@naver.com',
    description: '이메일',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'http://www.naver.com',
    description: '이미지 url',
    required: false,
  })
  @IsUrl()
  @IsOptional()
  imgUrl: string;
}
