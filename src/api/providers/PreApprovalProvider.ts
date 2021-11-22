import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { toXML } from 'jstoxml';
import { lastValueFrom } from 'rxjs';
import { JoiningPlanDTO } from '../dtos/PreApproval/JoiningPlan/JoiningPlanDTO';
import { StatusPlanDTO } from '../dtos/PreApproval/StatusPlanDTO';
import { PreApprovalResponseCodeModel } from '../models/PreApprovalCodeResponseModel';

@Injectable()
export class PreApprovalProvider {
  constructor(private readonly httpService: HttpService) {}
  private urlProvider: string = process.env.pagSeguro;
  private email: string = process.env.pagSeguro_email;
  private token: string = process.env.pagSeguro_token;

  /**
   * @param {unknown} payload
   * @description Cria um novo plano de recorrencia
   */
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
   * @param {StatusPlanDTO} payload
   * @description Atualiza o status do plano
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

  /**
   * @param {JoiningPlanDTO} payload
   * @description Adesao de plano
   */
  async joiningPlan(
    payload: JoiningPlanDTO,
  ): Promise<AxiosResponse<PreApprovalResponseCodeModel>> {
    const endPoint = `pre-approvals`;
    const obs = this.httpService.post(
      `${this.urlProvider}${endPoint}?email=${this.email}&token=${this.token}`,
      payload,
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
