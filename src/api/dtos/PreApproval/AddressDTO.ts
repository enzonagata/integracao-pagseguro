import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AddressDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(80)
  street: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  number: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  complement: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  district: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(60)
  city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  postalCode: string;
}
