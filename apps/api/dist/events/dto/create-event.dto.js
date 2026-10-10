var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform } from 'class-transformer';
import { IsDateString, IsEnum, IsOptional, IsString, Matches, MaxLength, MinLength, } from 'class-validator';
import { EventType } from '../../generated/prisma/enums.js';
export class CreateEventDto {
    title;
    slug;
    type;
    startsAt;
    endsAt;
    timezone;
    venue;
    description;
}
__decorate([
    Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)),
    IsString(),
    MinLength(2),
    MaxLength(150),
    __metadata("design:type", String)
], CreateEventDto.prototype, "title", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(80),
    Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug hanya boleh huruf kecil, angka, dan tanda hubung',
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "slug", void 0);
__decorate([
    IsOptional(),
    IsEnum(EventType),
    __metadata("design:type", String)
], CreateEventDto.prototype, "type", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "startsAt", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "endsAt", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(64),
    __metadata("design:type", String)
], CreateEventDto.prototype, "timezone", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(255),
    __metadata("design:type", String)
], CreateEventDto.prototype, "venue", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], CreateEventDto.prototype, "description", void 0);
//# sourceMappingURL=create-event.dto.js.map