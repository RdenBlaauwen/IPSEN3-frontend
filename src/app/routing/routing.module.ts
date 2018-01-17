import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSelfComponent } from '../account-self/account-self.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { CustomersComponent } from '../customers/customers.component';
import { DataComponent } from '../data/data.component';
import { HoursComponent } from '../hours/hours.component';
import { LoginComponent } from '../login/login.component';
import { ManualComponent } from '../manual/manual.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CategoryComponent } from '../categories/categories.component';
import {UserStoryComponent} from '../userstories/userstories.component';
import {AddProjectComponent} from "../projects/add-project/add-project.component";
import { CreateCategoryComponent } from '../categories/create-category/create-category.component';
import { EditProjectComponent } from '../projects/edit-project/edit-project.component';
import { LogoutComponent } from '../logout/logout.component';
import { ModifyCustomerComponent } from '../customers/modify-customer/modify-customer.component';
import { CreateCustomerComponent } from '../customers/create-customer/create-customer.component';
import { CreateAccountComponent } from '../accounts/create-account/create-account.component';
import { AddUserStoryComponent } from '../userstories/add-userstory/add-userstory.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'add_project', component: AddProjectComponent },
  { path: 'create_sprint', component: CreateCategoryComponent },
  { path: 'modify-project', component: EditProjectComponent },
  { path: 'modify-customer', component: ModifyCustomerComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'account-self', component: AccountSelfComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'hour-management', component: HoursComponent },
  { path: 'project-management', component: ProjectsComponent },
  { path: 'sprint-management', component: CategoryComponent },
  { path: 'userstory-management', component: UserStoryComponent },
  { path: 'account-management', component: AccountsComponent },
  { path: 'customer-management', component: CustomersComponent },
  { path: 'data-management', component: DataComponent },
  { path: 'account-management/create', component: CreateAccountComponent},
  { path: 'add_userstory', component: AddUserStoryComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  entryComponents:[ AddUserStoryComponent ]

})
export class RoutingModule { }