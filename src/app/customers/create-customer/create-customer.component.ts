import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../models/CustomerModel';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  customer: CustomerModel = new CustomerModel();
  constructor(private customerService: CustomerService) { }

  insertNewCustomer() {
    this.customerService.insertNewCustomer(this.customer);
  }
}
