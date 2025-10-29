import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LalachuuComponent } from './lalachuu.component';

describe('LalachuuComponent', () => {
  let component: LalachuuComponent;
  let fixture: ComponentFixture<LalachuuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LalachuuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LalachuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
