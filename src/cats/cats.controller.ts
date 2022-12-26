import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCats() {}

  @Post('signup')
  async signUp(@Body() body: CreateCatDto) {
    console.log(body);
    return 'signup';
  }

  @Post('login')
  logIn() {}

  @Post('logout')
  logOut() {}

  @Post('upload')
  uploadCatImg() {}
}
