import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async checkExistsByEmail(email: string): Promise<boolean> {
    let data: boolean;

    await this.catModel.exists(
      {
        email,
      },
      (err, data) => {
        if (err) {
          throw new HttpException(err, 500);
        }

        data = data._id;
      },
    );

    return data;
  }
}
