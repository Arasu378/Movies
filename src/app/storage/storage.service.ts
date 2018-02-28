import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

   setDomain(domain: string): void {
    sessionStorage.setItem('domain', domain);
  }
  public getDomain(): string {
    return sessionStorage.getItem('domain');
  }
  public setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }
  public getToken(): string {
    return sessionStorage.getItem('token');
  }


}
