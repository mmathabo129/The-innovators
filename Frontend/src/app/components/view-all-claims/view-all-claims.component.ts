import { Component, OnInit } from '@angular/core';
import { ViewClaimsService } from './view-claims.service';

@Component({
  selector: 'app-view-all-claims',
  templateUrl: './view-all-claims.component.html',
  styleUrls: ['./view-all-claims.component.css']
})
export class ViewAllClaimsComponent  implements OnInit{

  allClaims: any[] = [];
  flaggedClaims: any[] = [];
  successfulClaims: any[] = [];
  selectedTabIndex: number = 0;

  constructor(private claimsService: ViewClaimsService) {}

  ngOnInit(): void {
    this.loadClaims();
  }

  loadClaims(): void {
    if (this.selectedTabIndex === 0) {
      this.claimsService.getAllClaims().subscribe(data => {
        this.allClaims = data;
      });
    } else if (this.selectedTabIndex === 1) {
      this.claimsService.getFlaggedClaims().subscribe(data => {
        this.flaggedClaims = data;
      });
    } else if (this.selectedTabIndex === 2) {
      this.claimsService.getSuccessfulClaims().subscribe(data => {
        this.successfulClaims = data;
      });
    }
  }

  onTabChange(event: any): void {
    this.selectedTabIndex = event.index;
    this.loadClaims();
  }

}
