import { IsEmail, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  // Opsional: dipakai bila user tergabung di lebih dari satu organisasi.
  // Jika kosong, dipakai keanggotaan tertua.
  @IsOptional()
  @IsString()
  organizationId?: string;
}
