import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByNameComponent } from './user/search-by-name/search-by-name.component';

const routes: Routes = [
  { path: 'nurse/search-by-name', component: SearchByNameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
