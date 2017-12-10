import { Component, OnInit } from '@angular/core';
import { ADMIN_PAGES, BASE_PAGES } from '../page-list';
import { Page } from '../page';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

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
