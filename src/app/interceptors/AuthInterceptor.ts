import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StorageService} from '../storage/storage.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const authToken = this.storage.getToken();
   const authDomain =  this.storage.getDomain();
   if (authToken != null && authDomain != null ) {
     console.log('Headers : ' + authDomain );
     const  authReq =  req.clone({
       headers: new HttpHeaders().set('Content-Type', 'application/json')
         .set('Authorization', authToken)
         .set('idDomain', authDomain)
     });
     return next.handle(authReq);
   } else {
     return next.handle(req);
   }

  }

}


