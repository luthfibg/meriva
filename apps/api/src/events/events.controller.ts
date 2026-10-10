import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard.js';
import type { AuthedRequest } from '../auth/auth-user.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { CreateEventDto } from './dto/create-event.dto.js';
import { ListEventsQueryDto } from './dto/list-events.dto.js';
import { UpdateEventDto } from './dto/update-event.dto.js';
import { EventsService } from './events.service.js';

// Baca: semua anggota organisasi (termasuk CHECKIN_STAFF dan VIEWER).
// Tulis: OWNER, ADMIN, EVENT_MANAGER. Hapus: OWNER, ADMIN.
@UseGuards(AuthGuard, RolesGuard)
@Controller('events')
export class EventsController {
  constructor(private readonly events: EventsService) {}

  @Post()
  @Roles('OWNER', 'ADMIN', 'EVENT_MANAGER')
  create(@Req() req: AuthedRequest, @Body() dto: CreateEventDto) {
    return this.events.create(req.user.orgId, dto);
  }

  @Get()
  findAll(@Req() req: AuthedRequest, @Query() query: ListEventsQueryDto) {
    return this.events.findAll(req.user.orgId, query);
  }

  @Get(':id')
  findOne(@Req() req: AuthedRequest, @Param('id') id: string) {
    return this.events.findOne(req.user.orgId, id);
  }

  @Patch(':id')
  @Roles('OWNER', 'ADMIN', 'EVENT_MANAGER')
  update(
    @Req() req: AuthedRequest,
    @Param('id') id: string,
    @Body() dto: UpdateEventDto,
  ) {
    return this.events.update(req.user.orgId, id, dto);
  }

  @Delete(':id')
  @Roles('OWNER', 'ADMIN')
  remove(@Req() req: AuthedRequest, @Param('id') id: string) {
    return this.events.remove(req.user.orgId, id);
  }
}
