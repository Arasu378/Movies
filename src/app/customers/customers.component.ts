import {AfterViewInit, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {CustomersService} from '../service/customers.service';
import {CustomerResponse} from '../models/CustomerResponse';
import {Customers} from '../models/Customers';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TagInfo} from '../models/TagInfo';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  private customersResponse: CustomerResponse;
  private customerList: Customers[];
  tagInfo: TagInfo[];
   displayedColumns =  ['contactFirstName', 'contactLastName', 'contactMobile', 'name', 'contactEmail', 'address', 'tags' ];
   dataSource = new MatTableDataSource<Customers>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    this.getAllCustomers();
  }
  getAllCustomers(): void {
    this.customerService.customersAll()
      .subscribe(response => {
        this.customersResponse =  response;
        this.customerList = response.customers;
        this.dataSource.data = response.customers;
        response.customers.forEach(value => this.tagInfo =  value.tagInfo );
        },
        error2 => console.log(error2));
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =  this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  rowClicked(customers: Customers) {
    console.log(customers);
  }
}
