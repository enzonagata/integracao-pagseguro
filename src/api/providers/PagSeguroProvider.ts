import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { toXML } from 'jstoxml';
import { lastValueFrom } from 'rxjs';
import { StatusPlanDTO } from '../dtos/StatusPlanDTO';

@Injectable()
export class PagSeguroProvider {
  constructor(private readonly httpService: HttpService) {}
  private urlProvider: string = process.env.pagSeguro;
  private email: string = process.env.pagSeguro_email;
  private token: string = process.env.pagSeguro_token;

  async createPlan(payload: unknown): Promise<AxiosResponse<any>> {
    const endPoint = 'pre-approvals/request/';
    const xml = toXML(payload);
    const obs = this.httpService.post(
      `${this.urlProvider}${endPoint}?email=${this.email}&token=${this.token}`,
      xml,
      {
        headers: {
          Accept: 'application/vnd.pagseguro.com.br.v3+xml;charset=ISO-8859-1',
          'Content-Type': 'application/xml;charset=ISO-8859-1',
        },
      },
    );
    return await lastValueFrom(obs);
  }

  /**
   * @param {BalanceRequestDTO} payload
   * @description get last balance and send request to pubsub for update wallet collection
   */
  async statusPlan(payload: StatusPlanDTO): Promise<AxiosResponse<any>> {
    const endPoint = `pre-approvals/${payload.preApprovalCode}/status`;
    const { status } = payload;
    const newPayload = { status };
    const obs = this.httpService.put(
      `${this.urlProvider}${endPoint}?email=${this.email}&token=${this.token}`,
      newPayload,
      {
        headers: {
          Accept: 'application/vnd.pagseguro.com.br.v3+xml;charset=ISO-8859-1',
          'Content-Type': 'application/json',
        },
      },
    );
    return await lastValueFrom(obs);
  }
}
