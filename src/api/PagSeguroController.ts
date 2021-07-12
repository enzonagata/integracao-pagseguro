import { Controller, Get } from '@nestjs/common';
import { PagSeguroService } from './PagSeguroService';

@Controller('pagseguro')
export class PagSeguroController {
  constructor(private readonly appService: PagSeguroService) {}

  @Get()
  async getHello(): Promise<boolean> {
    return await this.appService.getHello();
  }
}
