import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSelfComponent } from '../account-self/account-self.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { CustomersComponent } from '../customers/customers.component';
import { DataComponent } from '../data/data.component';
import { LoginComponent } from '../login/login.component';
import { ManualComponent } from '../manual/manual.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CategoryComponent } from '../categories/categories.component';
import {AddProjectComponent} from "../projects/add-project/add-project.component";
import { CreateCategoryComponent } from '../categories/create-category/create-category.component';
import { EditProjectComponent } from '../projects/edit-project/edit-project.component';
import { LogoutComponent } from '../logout/logout.component';
import { ModifyCustomerComponent } from '../customers/modify-customer/modify-customer.component';
import { CreateCustomerComponent } from '../customers/create-customer/create-customer.component';
import { CreateAccountComponent } from '../accounts/create-account/create-account.component';
import { TasksComponent } from '../tasks/tasks.component';
import { AddTaskComponent } from '../tasks/add-tasks/add-tasks.component';
import { EntryComponent } from '../entries/entries.component';
import { EntryApprovalComponent } from '../entry-approval/entry-approval.component';

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
  { path: 'Uren', component: EntryComponent },
  { path: 'UrenGoedkeuren', component: EntryApprovalComponent },
  { path: 'Projecten', component: ProjectsComponent },
  { path: 'Categorieen', component: CategoryComponent },
  { path: 'Taken', component: TasksComponent },
  { path: 'Medewerkers', component: AccountsComponent },
  { path: 'Klanten', component: CustomersComponent },
  { path: 'data-management', component: DataComponent },
  { path: 'account-management/create', component: CreateAccountComponent},
  { path: 'add_userstory', component: AddTaskComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  entryComponents:[ AddTaskComponent ]

})
export class RoutingModule { }