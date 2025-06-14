import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QrService {
  private qrCode: string;
  private expirationTime: Date;
  private readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    // Required configuration - will throw error if missing
    this.baseUrl = this.configService.getOrThrow<string>('BASE_URL');
    
    // Initial generation
    this.generateNewQrCode();
    
    // Periodic regeneration
    setInterval(() => this.generateNewQrCode(), 10000);
  }

  private async generateNewQrCode(): Promise<void> {
    const timestamp = Date.now();
    const url = `${this.baseUrl}/movies?t=${timestamp}`;
    this.qrCode = await QRCode.toDataURL(url);
    this.expirationTime = new Date(Date.now() + 10000);
  }

  getCurrentQrCode(): { qrCode: string; expiresAt: Date } {
    return {
      qrCode: this.qrCode,
      expiresAt: this.expirationTime,
    };
  }
}