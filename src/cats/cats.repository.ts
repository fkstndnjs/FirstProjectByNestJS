import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async checkExistsByEmail(email: string): Promise<boolean> {
    let isExist: boolean;

    await this.catModel.exists(
      {
        email,
      },
      (err, data) => {
        if (err) {
          throw new HttpException('이미 존재하는 계정입니다.', 409);
        }

        isExist = !!data;
      },
    );

    return isExist;
  }

  async createCat(cat: CreateCatDto) {
    const createdCat: any = await this.catModel.create({
      name: cat.name,
      password: cat.password,
      email: cat.email,
      imgUrl: cat.imgUrl,
    });

    return createdCat;
  }
}
