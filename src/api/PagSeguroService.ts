import { HttpException, Injectable } from '@nestjs/common';
import { PagSeguroProvider } from './providers/PagSeguroProvider';

@Injectable()
export class PagSeguroService {
  constructor(public pagSeguroProvider: PagSeguroProvider) {}
  async getHello(): Promise<boolean> {
    try {
      const plan = await this.pagSeguroProvider.createPlan({
        preApprovalRequest: {
          reference: 'plan12021222',
          preApproval: {
            name: 'Plano 3',
            charge: 'AUTO',
            period: 'MONTHLY',
            amountPerPayment: 100.0,
            trialPeriodDuration: 30,
            details: 'Primeiro plano de teste',
            expiration: {
              value: 2,
              unit: 'YEARS',
            },
          },
          receiver: {
            email: 'enzo_nagata@hotmail.com',
          },
        },
      });
      console.log(plan);
    } catch (e) {
      throw new HttpException(e.response.data, e.response.status);
    }

    return true;
  }
}
