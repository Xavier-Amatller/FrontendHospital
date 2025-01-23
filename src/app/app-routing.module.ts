import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchByNameComponent } from './user/search-by-name/search-by-name.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';
import { ProfileMenuComponent } from './user/profile-menu/profile-menu.component';

const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"nurse/login", component: LoginFormComponent},
  {path:"nurse/register", component: RegisterFormComponent},
  {path:"nurse/search-by-name", component: SearchByNameComponent},
  {path: "nurse/profile", component: ProfileMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
