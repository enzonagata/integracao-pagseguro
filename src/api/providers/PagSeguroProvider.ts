import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { toXML } from 'jstoxml';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PagSeguroProvider {
  constructor(private readonly httpService: HttpService) {}
  private urlProvider: string = process.env.pagSeguro;
  private email: string = process.env.pagSeguro_email;
  private token: string = process.env.pagSeguro_token;
  private config = {
    headers: {
      Accept: 'application/vnd.pagseguro.com.br.v3+xml;charset=ISO-8859-1',
      'Content-Type': 'application/xml;charset=ISO-8859-1',
    },
  };

  async createPlan(payload: unknown): Promise<AxiosResponse<any>> {
    const endPoint = 'pre-approvals/request/';
    const xml = toXML(payload);
    const obs = this.httpService.post(
      `${this.urlProvider}${endPoint}?email=${this.email}&token=${this.token}`,
      xml,
      this.config,
    );
    return await firstValueFrom(obs);
  }
}
