import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerModel } from '../../models/CustomerModel';

@Component({
  selector: 'app-modify-customer',
  templateUrl: './modify-customer.component.html',
  styleUrls: ['./modify-customer.component.css']
})
export class ModifyCustomerComponent  {

  selectedCustomer: CustomerModel;
  constructor(private customerService: CustomerService) {
    if(customerService.customerToModify != null)
    {
      this.selectedCustomer = customerService.customerToModify;
    }
   }

   modifyCustomer()
   {
     this.customerService.updateCustomer(this.selectedCustomer);
   }

}
