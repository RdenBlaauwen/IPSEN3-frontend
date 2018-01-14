import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-self',
  templateUrl: './account-self.component.html',
  styleUrls: ['./account-self.component.css']
})
export class AccountSelfComponent implements OnInit {

  constructor() { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }

}
