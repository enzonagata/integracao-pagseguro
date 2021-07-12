import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PagSeguroController } from './api/PagSeguroController';
import { PagSeguroService } from './api/PagSeguroService';
import { PagSeguroProvider } from './api/providers/PagSeguroProvider';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/${process.env.NODE_ENV || 'dev'}.env`,
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [PagSeguroController],
  providers: [PagSeguroService, PagSeguroProvider],
})
export class AppModule {}
