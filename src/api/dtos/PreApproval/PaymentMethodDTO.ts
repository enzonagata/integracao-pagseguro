import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreditCardDTO } from './CreditCardDTO';

export class PaymentMethodDTO {
  @IsNotEmpty()
  @IsString()
  type: string;

  @ValidateNested()
  creditCard: CreditCardDTO;
}
