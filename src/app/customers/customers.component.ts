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
  constructor(private customerService: CustomerService, auth: AuthService, private dialogService: DialogService, private snackBar: MatSnackBar) {
    this.loggedEmployeeModel = auth.getEmployeeModel();
    this.loadData().then((data) => {
      this.dataSource = new MatTableDataSource<CustomerModel>(data);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  //  MatTableDataSource function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //  Return promise to use to fill data
  //  !! IMPORTANT THING TO NOTE IS WE HAVE TO WAIT UNTIL WE COMPLETE THE DATA REQUEST BEFORE SHOWING !!
  loadData(): Promise<CustomerModel[]> {
    return this.customerService.getAllCustomers()
      .toPromise()
      .then(res => res)
      .then(customers => customers.map(customer => {
        return new CustomerModel(
          customer.customer_id,
          customer.customer_name,
          customer.customer_description,
          customer.customer_isdeleted);
      }));
  }
  selectRow(row) {
    this.selectedCustomer = row
  }
  modifyCustomer()
  {
    this.customerService.setCustomerToModify(this.selectedCustomer);
  }
  deleteCustomer()
  {
    this.customerService.removeCustomer(this.selectedCustomer);
  }
  ngOnInit() {
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
