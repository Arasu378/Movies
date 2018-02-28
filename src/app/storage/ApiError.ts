import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
@Injectable()
export class ApiError {
  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
     console.error(error);
     return of (result as T);
    };
  }
}
