import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GraphResponse} from '../models/GraphResponse';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {HandleError, HttpErrorHandlerService} from '../cache/http-error-handler.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GraphService {
  private apiUrl =  environment.testingurl;
  private graphData = new  BehaviorSubject<GraphResponse>(new GraphResponse());
  public graphPublicData = this.graphData.asObservable();
  private handleError: HandleError;
  // private  httpOptions = {
  //   headers: new HttpHeaders().set('Content-Type', 'application/json')
  //     .set('Authorization', this.storage.getToken())
  //     .set('idDomain', this.storage.getDomain())
  // };
  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = this.httpErrorHandler.createHandleError('Graph Service');
  }
  getGraphAPI(userId: string, object: Object): Observable<GraphResponse> {
    console.log('Input : ' + JSON.stringify(object));
    return this.http.put<GraphResponse>(this.apiUrl + '/graph/getAll/' + userId, object)
      .pipe(  catchError(this.handleError('graphresponse error', new GraphResponse())));
  }


}
