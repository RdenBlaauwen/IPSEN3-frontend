
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DialogContentComponent } from '../admin/dialog-content/dialog-content.component';
import { CreateCustomerComponent } from '../customers/create-customer/create-customer.component';
import { AddProjectComponent } from '../projects/add-project/add-project.component';
import { CreateAccountComponent } from '../accounts/create-account/create-account.component';
import { CreateCategoryComponent } from '../categories/create-category/create-category.component';

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

    public createProject(){
        let dialogRef: MatDialogRef<AddProjectComponent>;
        dialogRef = this.dialog.open(AddProjectComponent);

        return dialogRef.afterClosed();
    }

    public createAccount(){
        let dialogRef: MatDialogRef<CreateAccountComponent>;
        dialogRef = this.dialog.open(CreateAccountComponent);

        return dialogRef.afterClosed();
    }

    public createCategory():Observable<boolean>{
        let dialogRef: MatDialogRef<CreateCategoryComponent>;
        dialogRef = this.dialog.open(CreateCategoryComponent);

        return dialogRef.afterClosed();
    }
}