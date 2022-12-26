import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail, IsString, IsUrl } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @Prop({
    required: true,
  })
  @IsString()
  name: string;

  @Prop({
    required: true,
  })
  @IsString()
  password: string;

  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Prop()
  @IsUrl()
  imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
