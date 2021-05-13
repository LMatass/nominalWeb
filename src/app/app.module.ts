import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SidebarModule } from 'ng-sidebar';
import { EmployeesSearchBarComponent } from './employees-search-bar/employees-search-bar.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DatePipe } from '@angular/common';
import { CompaniesSearchBarComponent } from './companies-search-bar/companies-search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    EmployeesComponent,
    PayrollComponent,
    EmployeesSearchBarComponent,
    EmployeesPageComponent,
    HomepageComponent,
    CompaniesSearchBarComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule,
    SidebarModule.forRoot(),
    ReactiveFormsModule,







  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
