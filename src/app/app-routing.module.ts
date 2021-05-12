import { HomepageComponent } from './homepage/homepage.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollComponent } from './payroll/payroll.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesPageComponent } from './employees-page/employees-page.component';

// lets array of routes to switch inside app
const routes: Routes = [ {path: 'home', component: HomepageComponent}, {path: 'employeespage', component: EmployeesPageComponent},  {path: 'main', pathMatch: 'full',
component: MainpageComponent},
 { path: 'payroll', component: PayrollComponent}, { path : '**', component: EmployeesPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
