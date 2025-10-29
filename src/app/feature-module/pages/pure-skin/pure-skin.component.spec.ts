import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSkinComponent } from './pure-skin.component';

describe('PureSkinComponent', () => {
  let component: PureSkinComponent;
  let fixture: ComponentFixture<PureSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureSkinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
