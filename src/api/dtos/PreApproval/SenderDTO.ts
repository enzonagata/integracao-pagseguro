import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { AddressDTO } from './AddressDTO';
import { DocumentsDTO } from './DocumentsDTO';
import { PhoneDTO } from './PhoneDTO';

export class SenderDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  ip: string;

  @IsNotEmpty()
  @IsString()
  hash: string;

  @IsNotEmpty()
  @ValidateNested()
  phone: PhoneDTO;

  @IsNotEmpty()
  @ValidateNested()
  address: AddressDTO;

  @IsNotEmpty()
  @ValidateNested()
  documents: DocumentsDTO[];
}
