import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {CustomerResponse} from '../models/CustomerResponse';
import {StorageService} from '../storage/storage.service';
import {catchError, tap} from 'rxjs/operators';
import {HandleError, HttpErrorHandlerService} from '../cache/http-error-handler.service';

@Injectable()
export class CustomersService {
  url = environment.testingurl + '/customers/getAll';
  private handleError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = this.httpErrorHandler.createHandleError('Graph Service');

  }
  customersAll(): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(this.url)
      .pipe(catchError(this.handleError('getAllCustomers', new CustomerResponse())));
  }

}
