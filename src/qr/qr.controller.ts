import { Controller, Get, Render } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller()
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  @Render('index')
  showQr() {
    return this.qrService.getCurrentQrCode();
  }
}
