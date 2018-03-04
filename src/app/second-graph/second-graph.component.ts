import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {GraphMapService} from '../graph-map.service';
import {GraphResponse} from '../models/GraphResponse';
import {GraphResult} from '../models/GraphResult';

@Component({
  selector: 'app-second-graph',
  templateUrl: './second-graph.component.html',
  styleUrls: ['./second-graph.component.css']
})
export class SecondGraphComponent implements OnInit, AfterViewInit {
  @Input() data: GraphResponse;

  ngAfterViewInit(): void {
  }

  constructor(private dataService: GraphMapService) {
    this.dataService.graphPublicData.subscribe(response => console.log('second : ' + JSON.stringify(response)));
  }

  ngOnInit() {
  }

}
