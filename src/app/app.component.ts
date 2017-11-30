import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { ADMIN_PAGES } from './page-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.RDB-box.css']
})
export class AppComponent implements OnInit{
  title = 'Webedu-mockup';

  links = ADMIN_PAGES;
  ngOnInit() {
  }
}
