import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule, MatTableModule, MatSelectModule, MatOptionModule, MatNativeDateModule, MatDatepickerModule, MatCardModule, MatToolbarModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RoutingModule } from './routing/routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { CategoryComponent } from './categories/categories.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { DataComponent } from './data/data.component';
import { ManualComponent } from './manual/manual.component';
import { AccountSelfComponent } from './account-self/account-self.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
// import {FormControl} from '@angular/forms';

import { ProjectService } from './services/project.service';
import { EmployeeService } from './services/employee.service';
import { AuthService } from './services/auth.service';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { CustomerService } from './services/customer.service';
import { ModifyCustomerComponent } from './customers/modify-customer/modify-customer.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ExportComponent } from './export/export.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DialogContentComponent } from './admin/dialog-content/dialog-content.component'; 
import { DialogService } from './services/DialogService';
import { CreateAccountComponent } from './accounts/create-account/create-account.component';
import { ModifyComponent } from './accounts/modify/modify.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-tasks/add-tasks.component';
import { EditUTaskComponent } from './tasks/edit-tasks/edit-tasks.component';
import { EntryComponent } from './entries/entries.component';
import { AddEntryComponent } from './entries/add-entry/add-entry.component';
import { EditEntryComponent } from './entries/edit-entry/edit-entry.component';
import { EntryService } from './services/entry.service';
import { TaskService } from './services/task.service';
import { DateHelper} from './helpers/dateHelper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ExportService } from './services/export';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddEntryComponent,
    EditEntryComponent,
    ProjectsComponent,
    CategoryComponent,
    TasksComponent,
    AccountsComponent,
    CustomersComponent,
    DataComponent,
    ManualComponent,
    AccountSelfComponent,
    LoginComponent,
    AddTaskComponent,
    EditUTaskComponent,
    AddProjectComponent,
    EditProjectComponent,
    CreateCategoryComponent,
    LogoutComponent,
    ModifyCustomerComponent,
    CreateCustomerComponent,
    ExportComponent,
    HeaderComponent,
    FooterComponent,
    DialogContentComponent,
    CreateAccountComponent,
    ModifyComponent,
    EditCategoryComponent
  ],
  entryComponents: [DialogContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    // FormControl,
    HttpModule,
    HttpClientModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule,
    MatSidenavModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [ProjectService,
    AuthService,
    DateHelper,
    EmployeeService,
    EntryService, 
    CategoryService,
    CustomerService,
    DialogService,
    TaskService,
    ExportService,
    {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
