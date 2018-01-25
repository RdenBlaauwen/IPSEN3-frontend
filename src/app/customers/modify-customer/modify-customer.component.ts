import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerModel } from '../../models/CustomerModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modify-customer',
  templateUrl: './modify-customer.component.html',
  styleUrls: ['./modify-customer.component.css']
})
export class ModifyCustomerComponent implements OnInit {

  admin: boolean = false;
  selectedCustomer:CustomerModel = new CustomerModel();
  constructor(private customerService: CustomerService, auth: AuthService) {
    this.admin = auth.isAdmin();
   }
   ngOnInit(): void {
    this.customerService.events$.forEach(customer=>{
      this.selectedCustomer = customer;
    })
  }
   modifyCustomer()
   {
     this.customerService.updateCustomer(this.selectedCustomer);
     this.customerService.loadEvent(true);
   }

}
