import { HttpException, Injectable } from '@nestjs/common';
import { StatusPlanDTO } from './dtos/StatusPlanDTO';
import { PagSeguroProvider } from './providers/PagSeguroProvider';

@Injectable()
export class PagSeguroService {
  constructor(public pagSeguroProvider: PagSeguroProvider) {}

  async createPlan(payload: string): Promise<boolean> {
    try {
      const plan = await this.pagSeguroProvider.createPlan(payload);
      // TODO: Pega o preApprovalRequest code para salvar no banco de dados
      // TODO: Salvar no firestores, os dados do pagSeguro junto com as descrições dos planos
    } catch (e) {
      throw new HttpException(e.response.data, e.response.status);
    }
    return true;
  }

  async statusPlan(payload: StatusPlanDTO): Promise<void> {
    try {
      const status = await this.pagSeguroProvider.statusPlan(payload);
      // TODO: Pega o preApprovalRequest code para salvar no banco de dados
      // TODO: Salvar no firestores, os dados do pagSeguro junto com as descrições dos planos
    } catch (e) {
      throw new HttpException(e.response.data, e.response.status);
    }
  }
}
