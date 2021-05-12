import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SidebarModule } from 'ng-sidebar';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    EmployeesComponent,
    PayrollComponent,
    SearchBarComponent,
    EmployeesPageComponent,
    HomepageComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule,
    SidebarModule.forRoot(),







  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
