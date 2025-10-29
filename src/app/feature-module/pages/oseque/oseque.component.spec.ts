import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsequeComponent } from './oseque.component';

describe('OsequeComponent', () => {
  let component: OsequeComponent;
  let fixture: ComponentFixture<OsequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsequeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
