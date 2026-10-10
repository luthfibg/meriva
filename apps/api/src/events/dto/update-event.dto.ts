import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { EventStatus, EventType } from '../../generated/prisma/enums.js';

// Semua field opsional. Untuk endsAt, venue, dan description,
// nilai null menghapus isi sebelumnya. Slug tidak bisa diubah setelah dibuat.
export class UpdateEventDto {
  @IsOptional()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  title?: string;

  @IsOptional()
  @IsEnum(EventType)
  type?: EventType;

  @IsOptional()
  @IsEnum(EventStatus)
  status?: EventStatus;

  @IsOptional()
  @IsDateString()
  startsAt?: string;

  @IsOptional()
  @IsDateString()
  endsAt?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  timezone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  venue?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string | null;
}
