import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import * as bcrypt from 'bcrypt';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signup(body: CreateCatDto) {
    const { name, password, email } = body;

    // const isCatExist = await this.catModel.exists({
    //   email,
    // });

    // if (isCatExist) {
    //   throw new HttpException('이미 존재하는 계정입니다.', 409);
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);

    // const cat: any = await this.catModel.create({
    //   name,
    //   password: hashedPassword,
    //   email,
    // });

    // return { ...cat._doc, password: '***' };
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
