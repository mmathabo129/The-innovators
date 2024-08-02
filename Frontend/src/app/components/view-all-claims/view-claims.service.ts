import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewClaimsService {
  private claimsApiUrl = '/api/claims';

  constructor(private http: HttpClient) { }

  // flagged claims url will be /api/claims/flagged
  //all claims url will be api/claims/all-claims
  //successfull claims url will be api/claim/successful

  getAllClaims(): Observable<any> {
    return this.http.get(`${this.claimsApiUrl}/all-claims`);
  }

  getFlaggedClaims(): Observable<any> {
    return this.http.get(`${this.claimsApiUrl}/flagged`);
  }

  getSuccessfulClaims(): Observable<any> {
    return this.http.get(`${this.claimsApiUrl}/successful`);
  }
}
