import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  customerData: Customer[];
  constructor() {
    this.displayedColumns = ['customer_name', 'customer_description'];
    this.customerData  = [
      {customer_name: 'Bob', customer_description: 'DO NOT TRADE AWAY.'},
      {customer_name: 'Meowmel', customer_description: 'Meowmeowmeowmeowwww...'}, 
      {customer_name: 'Terratomere', customer_description: 'This does lotsa damage.'}
      
    ];
    this.dataSource = new MatTableDataSource(this.customerData);

   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
  ngOnInit() {
  }

}
export interface Customer {
  customer_name: string;
  customer_description: string;
}
