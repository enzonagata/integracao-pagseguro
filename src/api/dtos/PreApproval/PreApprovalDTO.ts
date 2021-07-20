import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { PaymentMethodDTO } from './PaymentMethodDTO';
import { SenderDTO } from './SenderDTO';

export class PreApprovalDTO {
  @IsString()
  @IsNotEmpty()
  plan: string;

  @IsString()
  @IsNotEmpty()
  reference: string;

  @IsNotEmpty()
  @ValidateNested()
  sender: SenderDTO;

  @IsNotEmpty()
  @ValidateNested()
  paymentMethod: PaymentMethodDTO;
}
