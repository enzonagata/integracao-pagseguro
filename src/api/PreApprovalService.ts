import { HttpException, Injectable } from '@nestjs/common';
import { StatusPlanDTO } from './dtos/PreApproval/StatusPlanDTO';
import { PreApprovalProvider } from './providers/PreApprovalProvider';

@Injectable()
export class PagSeguroService {
  constructor(public preApprovalProvider: PreApprovalProvider) {}

  async createPlan(payload: string): Promise<boolean> {
    try {
      const plan = await this.preApprovalProvider.createPlan(payload);
      // TODO: Pega o preApprovalRequest code para salvar no banco de dados
      // TODO: Salvar no firestores, os dados do pagSeguro junto com as descrições dos planos
    } catch (e) {
      throw new HttpException(e.response.data, e.response.status);
    }
    return true;
  }

  async statusPlan(payload: StatusPlanDTO): Promise<void> {
    try {
      const status = await this.preApprovalProvider.statusPlan(payload);
      // TODO: Pega o preApprovalRequest code para salvar no banco de dados
      // TODO: Salvar no firestores, os dados do pagSeguro junto com as descrições dos planos
    } catch (e) {
      throw new HttpException(e.response.data, e.response.status);
    }
  }
}
