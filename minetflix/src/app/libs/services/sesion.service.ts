import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable()
export class SesionService {

  private key = 'Yq3t6w9z';

  constructor(private cryptoService: CryptoService) { }

  get user() {
    try {
      const value = localStorage.getItem(this.key);
      const decrypt = this.cryptoService.get(value);
      return decrypt;
    } catch (e) {
      return null;
    }
  }

  create(user: string) {
    const crypto = this.cryptoService.set(user);
    localStorage.setItem(this.key, crypto);
  }

  destroy() {
    localStorage.removeItem(this.key);
  }

}
