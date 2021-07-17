import {
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { BillingAddressDTO } from './BillingAddressDTO';
import { DocumentsDTO } from './DocumentsDTO';
import { PhoneDTO } from './PhoneDTO';

export class HolderDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  //TODO: Ver o decorator que valida o formato da data
  birthDate: string;

  @ValidateNested()
  document: DocumentsDTO[];

  @ValidateNested()
  billingAddress: BillingAddressDTO;

  @ValidateNested()
  phone: PhoneDTO;
}
