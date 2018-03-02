import {Component, Injectable, OnInit} from '@angular/core';
import {GraphService} from '../service/graph.service';
import {DateModel} from '../models/DateModel';
import {GraphResponse} from '../models/GraphResponse';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-graph-comp',
  templateUrl: './graph-comp.component.html',
  styleUrls: ['./graph-comp.component.css']
})
export class GraphCompComponent implements OnInit {
  private graphData = new  BehaviorSubject<GraphResponse>(new GraphResponse());
  public graphPublicData = this.graphData.asObservable();
  constructor(private graphService: GraphService) { }

  ngOnInit() {
    this.getGraphAPI();
  }

   getGraphAPI(): void {
    this.graphService.getGraphAPI('5a85753baa9b030ff7ecdd93', new DateModel('2018-03-02'))
      .subscribe(response => {
        console.log('respn : ' + JSON.stringify(response));
        this.graphData.next(response);
      }, error2 => console.error('error : ' + error2));

  }
}
