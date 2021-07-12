import { Controller, Get } from '@nestjs/common';
import { PagSeguroService } from './PagSeguroService';

@Controller('pagseguro')
export class PagSeguroController {
  constructor(private readonly appService: PagSeguroService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
