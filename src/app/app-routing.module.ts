import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"nurse/login", component: LoginFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
