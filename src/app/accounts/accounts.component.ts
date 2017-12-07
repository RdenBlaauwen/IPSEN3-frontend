import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  accountData: Account[];
  constructor() {
    this.displayedColumns = ['account_name', 'account_role', 'email'];
    this.accountData  = [
      {account_name: 'Kees', account_role: 'Manager', email: "Ikbeenkees@email.com"},
      {account_name: 'Yue', account_role: 'Employee', email: 'shewhoismadeoflightharbingerofstars@theastraldeity.com'}, 
      {account_name: 'Mudgraw', account_role: 'Admin', email: 'Mudgraw@chultanguides.com'}
      
    ];
    this.dataSource = new MatTableDataSource(this.accountData);

   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
  ngOnInit() {
  }

}

export interface Account {
  account_name: string;
  account_role: string;
  email: string;
}

