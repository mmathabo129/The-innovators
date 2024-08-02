import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllClaimsComponent } from './view-all-claims.component';

describe('ViewAllClaimsComponent', () => {
  let component: ViewAllClaimsComponent;
  let fixture: ComponentFixture<ViewAllClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllClaimsComponent]
    });
    fixture = TestBed.createComponent(ViewAllClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
