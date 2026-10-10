var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards, } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { CreateEventDto } from './dto/create-event.dto.js';
import { ListEventsQueryDto } from './dto/list-events.dto.js';
import { UpdateEventDto } from './dto/update-event.dto.js';
import { EventsService } from './events.service.js';
let EventsController = class EventsController {
    events;
    constructor(events) {
        this.events = events;
    }
    create(req, dto) {
        return this.events.create(req.user.orgId, dto);
    }
    findAll(req, query) {
        return this.events.findAll(req.user.orgId, query);
    }
    findOne(req, id) {
        return this.events.findOne(req.user.orgId, id);
    }
    update(req, id, dto) {
        return this.events.update(req.user.orgId, id, dto);
    }
    remove(req, id) {
        return this.events.remove(req.user.orgId, id);
    }
};
__decorate([
    Post(),
    Roles('OWNER', 'ADMIN', 'EVENT_MANAGER'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, Req()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ListEventsQueryDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Req()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    Roles('OWNER', 'ADMIN', 'EVENT_MANAGER'),
    __param(0, Req()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateEventDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "update", null);
__decorate([
    Delete(':id'),
    Roles('OWNER', 'ADMIN'),
    __param(0, Req()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "remove", null);
EventsController = __decorate([
    UseGuards(AuthGuard, RolesGuard),
    Controller('events'),
    __metadata("design:paramtypes", [EventsService])
], EventsController);
export { EventsController };
//# sourceMappingURL=events.controller.js.map