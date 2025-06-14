import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QrService {
  private qrCode: string;
  private expirationTime: Date;

  constructor(private configService: ConfigService) {
    this.generateNewQrCode();
    setInterval(() => this.generateNewQrCode(), 10000);
  }

  private async generateNewQrCode(): Promise<void> {
    const baseUrl = this.configService.get('BASE_URL', 'http://localhost:3000');
    const url = `${baseUrl}/movies?t=${Date.now()}`;
    this.qrCode = await QRCode.toDataURL(url);
    this.expirationTime = new Date(Date.now() + 10000);
  }

  getCurrentQrCode() {
    return {
      qrCode: this.qrCode,
      expiresAt: this.expirationTime
    };
  }
}