import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MessageServiceService} from '../service/message-service.service';
import {of} from 'rxjs/observable/of';
export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) =>
  Observable<T>;
@Injectable()
export class HttpErrorHandlerService {

  constructor(private messageService: MessageServiceService) { }
  createHandleError = (serviceName = '' ) => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message : `Server returned code ${error.status} with body "${error.error}"`;
      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);
      return of (result);
    };

  }

}
