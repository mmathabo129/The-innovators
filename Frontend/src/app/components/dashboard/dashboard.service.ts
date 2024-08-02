import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'api/predict';
  private claimsApiUrl = '/api/claims';


  constructor(private http: HttpClient) { }

  predict(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

 
  getAllClaims(): Observable<any> {
    return this.http.get<any>(this.claimsApiUrl);
  }
}
