import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class PhoneDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  areaCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(9)
  @MinLength(7)
  number: string;
}
