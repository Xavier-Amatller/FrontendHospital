import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SearchByNameComponent } from './user/search-by-name/search-by-name.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';
import { ProfileMenuComponent } from './user/profile-menu/profile-menu.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SearchByNameComponent,
    LoginFormComponent,
    DashboardComponent,
    LandingPageComponent,
    RegisterFormComponent,
    ProfileMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
