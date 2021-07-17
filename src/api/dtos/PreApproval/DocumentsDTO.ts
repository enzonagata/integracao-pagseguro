import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class DocumentsDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  type: string; //Sempre CPF

  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  value: string;
}
