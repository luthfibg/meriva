import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { EventType } from '../../generated/prisma/enums.js';

export class CreateEventDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  title!: string;

  // Opsional. Jika kosong, dibuat otomatis dari title (unik per organisasi).
  @IsOptional()
  @IsString()
  @MaxLength(80)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'slug hanya boleh huruf kecil, angka, dan tanda hubung',
  })
  slug?: string;

  @IsOptional()
  @IsEnum(EventType)
  type?: EventType;

  // ISO 8601, disarankan dengan offset, mis. 2026-12-12T10:00:00+07:00
  @IsDateString()
  startsAt!: string;

  @IsOptional()
  @IsDateString()
  endsAt?: string;

  // Zona waktu IANA: Asia/Jakarta (WIB), Asia/Makassar (WITA), Asia/Jayapura (WIT)
  @IsOptional()
  @IsString()
  @MaxLength(64)
  timezone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  venue?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;
}
