import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabsComponent } from './mat-tab.component';

describe('MatTabsComponent', () => {
  let component: MatTabsComponent;
  let fixture: ComponentFixture<MatTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatTabsComponent]
    });
    fixture = TestBed.createComponent(MatTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
