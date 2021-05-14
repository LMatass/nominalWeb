import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // gets employees from back end service
  public getEmployees(): Observable<Employee[]>{

   return this.http.get<Employee[]>(`${this.apiServerUrl}/employees/all`);
    }

  // finds an employee from given id
  public findEmployee(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiServerUrl}/employees/find/${employeeId}`);
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employees/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employees/update`, employee);
  }


  public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/employees/delete/${employeeId}`);
  }


}
