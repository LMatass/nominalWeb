import { EmployeeService } from './../employees/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/models/employee';
import { Observable } from 'rxjs';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [EmployeeService]
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }


}
