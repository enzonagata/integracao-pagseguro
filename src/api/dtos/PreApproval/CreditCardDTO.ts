import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { HolderDTO } from './HolderDTO';

export class CreditCardDTO {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @ValidateNested()
  holder: HolderDTO;
}
