import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AuthModule implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const idToken = sessionStorage.getItem('token');
   const idDomain = localStorage.getItem('domain');
    if (idToken && idDomain) {
      const cloned =  req.clone({
        headers: req.headers.set('Authorization ', idToken)
          .set('Content-Type', 'application/json')
          .set('idDomain', idDomain)
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  } }
