import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicellComponent } from './medicell.component';

describe('MedicellComponent', () => {
  let component: MedicellComponent;
  let fixture: ComponentFixture<MedicellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
