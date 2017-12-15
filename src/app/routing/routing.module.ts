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
import { SprintsComponent } from '../sprints/sprints.component';
import {UserstoriesComponent} from '../userstories/userstories.component';

import{Page}from '../page';
import {BASE_PAGES,ADMIN_PAGES} from '../page-list';
import { HomeComponent } from '../home/home.component';
import {AddProjectComponent} from "../projects/add-project/add-project.component";
import { CreateSprintComponent } from '../sprints/create-sprint/create-sprint.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'add_project', component: AddProjectComponent },
  { path: 'create_sprint', component: CreateSprintComponent },
  { path: BASE_PAGES[2].name, component: AccountSelfComponent },
  { path: BASE_PAGES[3].name, component: ManualComponent },
  { path: ADMIN_PAGES[0].name, component: HoursComponent },
  { path: ADMIN_PAGES[1].name, component: ProjectsComponent },
  { path: ADMIN_PAGES[2].name, component: SprintsComponent },
  { path: ADMIN_PAGES[3].name, component: UserstoriesComponent },
  { path: ADMIN_PAGES[4].name, component: AccountsComponent },
  { path: ADMIN_PAGES[5].name, component: CustomersComponent },
  { path: ADMIN_PAGES[6].name, component: DataComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class RoutingModule { }
