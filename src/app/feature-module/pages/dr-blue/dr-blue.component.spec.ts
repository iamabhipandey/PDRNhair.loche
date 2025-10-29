import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrBlueComponent } from './dr-blue.component';

describe('DrBlueComponent', () => {
  let component: DrBlueComponent;
  let fixture: ComponentFixture<DrBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrBlueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
