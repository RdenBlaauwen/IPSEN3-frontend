import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http/';
import { Export } from './export';
import { ExportService } from '../services/export';

@Component({
  selector: 'app-export', 
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  constructor(private exportService: ExportService){}
 
  ngOnInit() {

  }

}