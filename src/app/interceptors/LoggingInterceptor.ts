import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {MessageServiceService} from '../service/message-service.service';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageServiceService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const started = Date.now();
  let ok: string;
  return next.handle(req)
    .pipe(tap(event => ok = event instanceof HttpResponse ? 'succeeded' : '',
      e => ok = 'failed'),
      finalize(() => {
      const elapsed = Date.now() - started;
      const msg = `${req.method} "${req.urlWithParams}"
            ${ok} in ${elapsed} ms.`;
      this.messageService.add(msg);
      }));

  }

}
