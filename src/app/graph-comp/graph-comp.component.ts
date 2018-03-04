import {Component, Injectable, OnInit} from '@angular/core';
import {GraphMapService} from '../graph-map.service';
import {GraphService} from '../service/graph.service';
import {StorageService} from '../storage/storage.service';
import {DatePipe} from '@angular/common';
import {GraphResponse} from '../models/GraphResponse';
import {GraphResult} from '../models/GraphResult';
@Component({
  selector: 'app-graph-comp',
  templateUrl: './graph-comp.component.html',
  styleUrls: ['./graph-comp.component.css']
})
export class GraphCompComponent implements OnInit {
  constructor(private graphService: GraphService, private storage: StorageService, private datePipe: DatePipe, private dataService: GraphMapService) { }
  private date: string;
  responseData: GraphResponse;
  ngOnInit() {
    this.getGraphAPI();
  }

   getGraphAPI(): void {
     this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
     console.log('Date2 : ' + this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
     this.graphService.getGraphAPI(this.storage.getUserId(), JSON.stringify( {'dateString': this.date}))
       .subscribe(response => {
         this.responseData =  response;
         this.dataService.setData(response);
       }, error2 => console.error('error : ' + error2));

   }
}
