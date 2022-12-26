import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('🚀 ---------------------------------------🚀');
    console.log('🚀 ~ process.env.PORT', process.env.PORT);
    console.log('🚀 ---------------------------------------🚀');
    return this.appService.getHello();
  }
}
