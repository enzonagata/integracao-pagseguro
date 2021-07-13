import { Body, Controller, Post, Put } from '@nestjs/common';
import { StatusPlanDTO } from './dtos/StatusPlanDTO';
import { PagSeguroService } from './PagSeguroService';

@Controller('pagseguro')
export class PagSeguroController {
  constructor(private readonly pagSeguroService: PagSeguroService) {}

  @Post('plan/create')
  async createPlan(@Body() payload: string): Promise<boolean> {
    return await this.pagSeguroService.createPlan(payload);
  }

  @Put('plan/status')
  async statusPlan(@Body() payload: StatusPlanDTO) {
    return await this.pagSeguroService.statusPlan(payload);
  }
}
