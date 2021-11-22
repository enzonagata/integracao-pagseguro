import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PreApprovalController } from './api/PreApprovalController';
import { PreApprovalService } from './api/service/PreApprovalService';
import { PreApprovalProvider } from './api/providers/PreApprovalProvider';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/${process.env.NODE_ENV || 'dev'}.env`,
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [PreApprovalController],
  providers: [PreApprovalService, PreApprovalProvider],
})
export class AppModule {}
