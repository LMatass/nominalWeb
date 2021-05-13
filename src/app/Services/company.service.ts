import { Company } from '../models/company';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

   // gets companies from back end service
   public getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.apiServerUrl}/companies/all`);
   }
}
