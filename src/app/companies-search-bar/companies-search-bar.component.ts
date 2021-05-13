import { CompanyService } from './../Services/company.service';
import { Company } from '../models/company';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies-search-bar',
  templateUrl: './companies-search-bar.component.html',
  styleUrls: ['./companies-search-bar.component.css']
})
export class CompaniesSearchBarComponent implements OnInit {
  public keyword = 'name';
  public data: Observable<Company[]>;
  public keywords = ['name', 'cif'];

  @Output() companyEvent = new EventEmitter<Company>();




  company: Company;
  constructor(private companyService: CompanyService) {

  }


  // emits the selected employee to the payroll parent component
  public selectEvent(company): void{
    this.companyEvent.emit(company);
  }

  // Gets all employees from service
  ngOnInit(): void {
    this.getCompanies();
  }


  getCompanies(): void{
    this.data = this.companyService.getCompanies();
    console.log(this.data);
  }

}
