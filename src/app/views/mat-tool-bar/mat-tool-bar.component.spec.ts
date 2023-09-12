import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolBarComponent } from './mat-tool-bar.component';

describe('MatToolBarComponent', () => {
  let component: MatToolBarComponent;
  let fixture: ComponentFixture<MatToolBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatToolBarComponent]
    });
    fixture = TestBed.createComponent(MatToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
