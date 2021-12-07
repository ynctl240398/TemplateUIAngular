import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private _cryptoService: CryptoService) { }

  public AddLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, this._Add(value));
  }

  public RemoveLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  public GetLocalStorage<T>(key: string): T {
    let result: T;
    let resultStr = this._Get(localStorage.getItem(key) || '');
    result = resultStr == '' ? null : JSON.parse(resultStr);
    return result;
  }

  public ClearLocalStorage(): void {
    localStorage.clear();
  }

  public AddSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, this._Add(value));
  }

  public RemoveSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  public GetSessionStorage<T>(key: string): T {
    let result: T;
    let resultStr = this._Get(sessionStorage.getItem(key) || '');
    result = resultStr == '' ? null : JSON.parse(resultStr);
    return result;
  }

  private _Add(value: string): string {
    let result: string = this._cryptoService.EncryptUsingAES256(value);
    return result;
  }

  private _Get(value: string): string {
    let result: string = this._cryptoService.DecryptUsingAES256(value);
    return result;
  }
}
