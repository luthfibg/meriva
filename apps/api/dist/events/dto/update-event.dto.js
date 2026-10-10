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
import { IsDateString, IsEnum, IsOptional, IsString, MaxLength, MinLength, } from 'class-validator';
import { EventStatus, EventType } from '../../generated/prisma/enums.js';
export class UpdateEventDto {
    title;
    type;
    status;
    startsAt;
    endsAt;
    timezone;
    venue;
    description;
}
__decorate([
    IsOptional(),
    Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)),
    IsString(),
    MinLength(2),
    MaxLength(150),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "title", void 0);
__decorate([
    IsOptional(),
    IsEnum(EventType),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "type", void 0);
__decorate([
    IsOptional(),
    IsEnum(EventStatus),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "startsAt", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", Object)
], UpdateEventDto.prototype, "endsAt", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(64),
    __metadata("design:type", String)
], UpdateEventDto.prototype, "timezone", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(255),
    __metadata("design:type", Object)
], UpdateEventDto.prototype, "venue", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", Object)
], UpdateEventDto.prototype, "description", void 0);
//# sourceMappingURL=update-event.dto.js.map