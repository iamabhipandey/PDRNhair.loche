import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RataplanComponent } from './rataplan.component';

describe('RataplanComponent', () => {
  let component: RataplanComponent;
  let fixture: ComponentFixture<RataplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RataplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RataplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
