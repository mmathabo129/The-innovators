import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaggedClaimsComponent } from './flagged-claims.component';

describe('FlaggedClaimsComponent', () => {
  let component: FlaggedClaimsComponent;
  let fixture: ComponentFixture<FlaggedClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlaggedClaimsComponent]
    });
    fixture = TestBed.createComponent(FlaggedClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
