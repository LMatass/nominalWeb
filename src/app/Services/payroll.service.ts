import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payroll } from '../models/payroll';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient){

  }
// gets companies from back end service
public exportHtml(payrollId: number): Observable<any>{
  return this.http.get(`${this.apiServerUrl}/report/html/${payrollId}`, {responseType: 'text'});
 }


  // calls the back end api to generate the pdf
 public exportPdf(payrollId: number): Observable<any>{
  return this.http.get(`${this.apiServerUrl}/report/pdf/${payrollId}`, {responseType: 'text'});
 }

  // calls the back end api to generate the csv
 public exportCsv(payrollId: number): Observable<any>{
  return this.http.get(`${this.apiServerUrl}/report/csv/${payrollId}`, {responseType: 'text'});
 }


  // sends the payroll Object as JSON to be received from the api then inserted into the database
 public addPayroll(payroll: Payroll): Observable<any>{

  return this.http.post(`${this.apiServerUrl}/payrolls/add`, JSON.stringify(payroll));
 }






}
