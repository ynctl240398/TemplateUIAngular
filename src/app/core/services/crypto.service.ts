import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CRYPTO } from '../constant';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private _key: any;
  private _iv: any;

  constructor() {
    this._key = CryptoJS.enc.Utf8.parse(CRYPTO.TOKEN_KEY);
    this._iv = CryptoJS.enc.Utf8.parse(CRYPTO.TOKEN_IV);
  }

  public EncryptUsingAES256(req: string): string {
    
    let result = CryptoJS.AES.encrypt(
      JSON.stringify(req), this._key, {
      keySize: 16,
      iv: this._iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();

    return result;
  }

  public DecryptUsingAES256(encrypted: string): string {
    
    let result = CryptoJS.AES.decrypt(
      encrypted, this._key, {
      keySize: 16,
      iv: this._iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);

    return result;
  }
}
