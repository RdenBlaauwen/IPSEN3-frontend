import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule, MatSnackBar, MatDialogRef } from '@angular/material';
import { CustomerModel } from '../models/CustomerModel';
import { Employee } from '../models/Employee';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customer.service';
import { DialogService } from '../services/DialogService';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  private dataSource: MatTableDataSource<CustomerModel>;
  displayedColumns = ['customerName', 'customerDescription', 'customerModify','customerDelete'];
  selectedCustomer: CustomerModel = new CustomerModel();
  loggedEmployeeModel: Employee;
  admin:boolean = false;
  constructor(private customerService: CustomerService, auth: AuthService, private dialogService: DialogService, private snackBar: MatSnackBar) {
    this.loggedEmployeeModel = auth.getEmployeeModel();
    this.admin = auth.isAdmin();
  }

  loadData(){
    this.customerService.getAllCustomers().subscribe( customers=> {
      this.dataSource = new MatTableDataSource<CustomerModel>(customers);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  //  MatTableDataSource function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  selectRow(row) {
    this.selectedCustomer = row;
    this.customerService.newEvent(row);
  }
  deleteCustomer()
  {
    this.customerService.removeCustomer(this.selectedCustomer);
  }
  ngOnInit() {
    this.loadData();
  }
  openDialog(){
    this.dialogService.confirm('Bevestigen','Weet u zeker dat u deze klant wilt verwijderen?').subscribe(res=>{
      if(res.valueOf()){
        this.deleteCustomer();
      }
    });
  }
  openCreateDialog(){
    this.dialogService.createCustomer();
  }

}
