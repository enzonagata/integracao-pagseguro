import { Body, Controller, Post, Put } from '@nestjs/common';
import { JoiningPlanDTO } from './dtos/PreApproval/JoiningPlan/JoiningPlanDTO';
import { StatusPlanDTO } from './dtos/PreApproval/StatusPlanDTO';
import { PreApprovalResponseCodeModel } from './models/PreApprovalCodeResponseModel';
import { PreApprovalService } from './service/PreApprovalService';

@Controller('preapproval')
export class PreApprovalController {
  constructor(private readonly preApprovalService: PreApprovalService) {}

  @Post('plan/create')
  async createPlan(@Body() payload: string): Promise<boolean> {
    return await this.preApprovalService.createPlan(payload);
  }

  @Put('plan/status')
  async statusPlan(@Body() payload: StatusPlanDTO) {
    return await this.preApprovalService.statusPlan(payload);
  }

  @Post('plan/join')
  async joiningPlan(
    @Body() payload: JoiningPlanDTO,
  ): Promise<PreApprovalResponseCodeModel> {
    return await this.preApprovalService.joinPlan(payload);
  }
}
