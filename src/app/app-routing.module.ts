import { PayrollComponent } from './payroll/payroll.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path: 'home', pathMatch: 'full',
component: MainpageComponent},  { path: 'payroll', component: PayrollComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
