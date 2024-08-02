import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationStatusComponent } from './investigation-status.component';

describe('InvestigationStatusComponent', () => {
  let component: InvestigationStatusComponent;
  let fixture: ComponentFixture<InvestigationStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestigationStatusComponent]
    });
    fixture = TestBed.createComponent(InvestigationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
