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

  public empl: any = null;


  constructor(private http: HttpClient){

  }
// gets companies from back end service
public exportHtml(exportId: number): Observable<any>{
  return this.http.get(`${this.apiServerUrl}/report/html/${exportId}`,{responseType: 'text'});
 }


 public exportPdf(exportId: number): Observable<any>{
  return this.http.get(`${this.apiServerUrl}/report/pdf/${exportId}`,{responseType: 'text'});
 }

 public addPayroll(payroll: Payroll): Observable<any>{


  return this.http.post(`${this.apiServerUrl}/payrolls/add`, JSON.stringify(payroll));
 }






}
