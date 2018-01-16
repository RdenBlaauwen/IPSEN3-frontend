import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerModel } from '../../models/CustomerModel';

@Component({
  selector: 'app-modify-customer',
  templateUrl: './modify-customer.component.html',
  styleUrls: ['./modify-customer.component.css']
})
export class ModifyCustomerComponent implements OnInit {


  selectedCustomer = new CustomerModel();
  constructor(private customerService: CustomerService) {
   }
   ngOnInit(): void {
    this.customerService.events$.forEach(customer=>{
      this.selectedCustomer = customer;
    })
  }
   modifyCustomer()
   {
     this.customerService.updateCustomer(this.selectedCustomer);
   }

}
