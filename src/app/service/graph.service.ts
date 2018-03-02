import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiError} from '../storage/ApiError';
import {Observable} from 'rxjs/Observable';
import {GraphResponse} from '../models/GraphResponse';
import {environment} from '../../environments/environment';
import {StorageService} from '../storage/storage.service';
import {catchError, map, tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GraphService {
  private apiUrl =  environment.testingurl;
  private graphData = new  BehaviorSubject<GraphResponse>(new GraphResponse());
  public graphPublicData = this.graphData.asObservable();
  private responseData: GraphResponse;
  private  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.storage.getToken())
      .set('idDomain', this.storage.getDomain())
  };
  constructor(private http: HttpClient, private error: ApiError, private storage: StorageService) { }
  getGraphAPI(userId: string, object: Object): Observable<GraphResponse> {
    return this.http.put<GraphResponse>(this.apiUrl + '/graph/getAll/' + userId, object, this.httpOptions)
      .pipe( (tap(response => {
      }),
        catchError(this.error.handleError('graphresponse error', new GraphResponse()))));
  }
  getGraphSubscribe() {
    this.graphData.next(this.responseData)
    return this.graphData.asObservable();
  }
}
