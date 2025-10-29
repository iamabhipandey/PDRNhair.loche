import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabyouComponent } from './fabyou.component';

describe('FabyouComponent', () => {
  let component: FabyouComponent;
  let fixture: ComponentFixture<FabyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabyouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
