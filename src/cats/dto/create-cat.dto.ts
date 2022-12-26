import {
  IsString,
  IsEmail,
  IsUrl,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateCatDto {
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
