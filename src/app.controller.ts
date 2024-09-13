import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'El barto';
  }
  
  @Get('nuevo')
  newElement (): string {
    return 'Bartolomeo J. Simpson'
  }
}
