import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { EventsModule } from './events/events.module.js';
import { config as loadEnv } from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const envFilePath = resolve(dirname(fileURLToPath(import.meta.url)), '../.env');
loadEnv({ path: envFilePath });

const appKey = process.env.APPKEY;
const appSecret = process.env.APPSECRET;

if (!appKey || !appSecret) {
  throw new Error(`APPKEY and APPSECRET must be set in ${envFilePath}`);
}

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey,
      appSecret,
      serviceId: 'api',
    }),
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    // PrismaModule is a global module that provides the PrismaService
    PrismaModule,
    AuthModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
