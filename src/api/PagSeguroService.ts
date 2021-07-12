import { Injectable } from '@nestjs/common';
import { PagSeguroProvider } from './providers/PagSeguroProvider';

@Injectable()
export class PagSeguroService {
  constructor(public pagSeguroProvider: PagSeguroProvider) {}
  getHello(): string {
    return 'Hello World!';
  }
}
