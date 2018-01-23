import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../models/CustomerModel';
import { CustomerService } from '../../services/customer.service';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  customer: CustomerModel = new CustomerModel();
  admin: boolean = false;
  constructor(private customerService: CustomerService,private dialogRef: MatDialogRef<any>, auth: AuthService) { 
    this.admin = auth.isAdmin();
  }

  insertNewCustomer() {
    this.customerService.insertNewCustomer(this.customer);
    this.dialogRef.close();
    this.customerService.loadEvent(true);
  }
}
