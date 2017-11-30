import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { RoutingModule } from './routing/routing.module';
import { HoursComponent } from './hours/hours.component';
import { ProjectsComponent } from './projects/projects.component';
import { SprintsComponent } from './sprints/sprints.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { DataComponent } from './data/data.component';
import { ManualComponent } from './manual/manual.component';
import { AccountSelfComponent } from './account-self/account-self.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HoursComponent,
    ProjectsComponent,
    SprintsComponent,
    UserstoriesComponent,
    AccountsComponent,
    CustomersComponent,
    DataComponent,
    ManualComponent,
    AccountSelfComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
