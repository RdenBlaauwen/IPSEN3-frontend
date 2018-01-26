import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  panelOpenState = false;

  constructor(private authService: AuthService, public dialogRef: MatDialogRef<ManualComponent>) { }

  public getUserRole(): boolean {
    if(this.authService.getEmployeeModel().employeeRole === 'administration'
        || this.authService.getEmployeeModel().employeeRole === 'manager') {
      return true;
    }
    return false;
  }

  ngOnInit() {}
}
