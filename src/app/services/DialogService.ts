
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DialogContentComponent } from '../admin/dialog-content/dialog-content.component';
import { CreateCustomerComponent } from '../customers/create-customer/create-customer.component';

@Injectable()
export class DialogService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string, warning?:string): Observable<boolean> {

        let dialogRef: MatDialogRef<DialogContentComponent>;

        dialogRef = this.dialog.open(DialogContentComponent);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        if(warning != null){
            dialogRef.componentInstance.warning = warning;
        }
        return dialogRef.afterClosed();
    }
    public createCustomer():Observable<boolean>{
        let dialogRef: MatDialogRef<CreateCustomerComponent>;
        dialogRef = this.dialog.open(CreateCustomerComponent);

        return dialogRef.afterClosed();
    }

    // public createCategorie():Observable<boolean>{
    //     let dialogRef: MatDialogRef<CreateCategorieComponent>;
    //     dialogRef = this.dialog.open(CreateCategorieComponent);

    //     return dialogRef.afterClosed();
    // }
    // public createUser(): Observable<boolean>{
    //     let dialogRef: MatDialogRef<CreateUserComponent>;
    //     dialogRef = this.dialog.open(CreateUserComponent);

    //     return dialogRef.afterClosed();
    // }
}