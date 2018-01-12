import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  public title: string;
  public message: string;
  public warning: string;

  constructor(public dialogRef: MatDialogRef<any>) {

  }

  ngOnInit() {
  }

}
