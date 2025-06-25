import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config'; // Importing ConfigService to manage configuration settings

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService, // Injecting ConfigService to access configuration settings
  ) {}

  @Get('database')
  getDatabaseInformation() {
    return {
      DB_HOST: this.configService.get('DB_HOST'),
      DB_USER: this.configService.get('DB_USER'),
      DB_PASSWORD: this.configService.get('DB_PASSWORD'),
      DB_NAME: process.env.DB_NAME, // Accessing environment variable directly
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
