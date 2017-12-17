import { Component, OnInit } from '@angular/core';
import { ADMIN_PAGES, BASE_PAGES } from '../page-list';
import { Page } from '../page';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  validated: boolean;
  loggedEmployeeModel: Employee;

  constructor(private http: Http, private router: Router, private auth: AuthService) { 
    //Checkt of de authorizatie al bestaat in de localStorage
    auth.getAuthorization();
    this.validated = auth.isAuthorized();
    this.loggedEmployeeModel = auth.getEmployeeModel();
  }

  title = 'Webedu-mockup';
  
    links = ADMIN_PAGES;
    baseLinks = BASE_PAGES;
    selectedLink: Page;
    ngOnInit() {
    }
  
    onLink(link: Page){
      this.selectedLink=link;
    }


}
