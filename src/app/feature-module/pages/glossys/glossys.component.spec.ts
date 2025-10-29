import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossysComponent } from './glossys.component';

describe('GlossysComponent', () => {
  let component: GlossysComponent;
  let fixture: ComponentFixture<GlossysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlossysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
