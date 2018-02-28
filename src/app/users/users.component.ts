import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../service/users.service';
import {Technicians} from '../models/Technicians';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  usersList: Technicians[];
  dataSource = new MatTableDataSource<Technicians>();
  displayedColumns = ['profile', 'firstName', 'lastName', 'language', 'email'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UsersService) { }
  getUsersList(): void {
    this.userService.getUsersList().subscribe(response => { this.usersList = response;
   this.dataSource.data = response ; },
      error2 => console.log(error2));
  }

  ngOnInit() {
    this.getUsersList();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =  this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  rowClicked(users: Technicians) {
    console.log(users);
  }

}
