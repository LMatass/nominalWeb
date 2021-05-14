import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  private apiServerUrl = environment.apiBaseUrl;

// gets companies from back end service
public exportHtml(exportId: number): void{
  window.open((`${this.apiServerUrl}/html/${exportId}`));
 }

}
