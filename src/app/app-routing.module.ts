import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListAllComponent } from './user/list-all/list-all.component';
import { SearchByNameComponent } from './user/search-by-name/search-by-name.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';

const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"nurse/login", component: LoginFormComponent},
  {path:"nurse/register", component: RegisterFormComponent},
  {path:"nurse/list-all", component: ListAllComponent},
  {path:"nurse/search-by-name", component: SearchByNameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
