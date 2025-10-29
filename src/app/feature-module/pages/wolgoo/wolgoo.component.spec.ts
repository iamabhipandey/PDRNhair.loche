import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolgooComponent } from './wolgoo.component';

describe('WolgooComponent', () => {
  let component: WolgooComponent;
  let fixture: ComponentFixture<WolgooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WolgooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WolgooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
