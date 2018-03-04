import { Injectable } from '@angular/core';
import {GraphService} from './service/graph.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {GraphResponse} from './models/GraphResponse';
import {StorageService} from './storage/storage.service';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GraphMapService {
  private graphData = new  BehaviorSubject<GraphResponse>(new GraphResponse());
  public graphPublicData = this.graphData.asObservable();
  constructor() { }
  setData(graphResponse: GraphResponse): void {
    this.graphData.next(graphResponse);
  }

}
