import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickComponent } from './colorpick.component';

describe('ColorpickComponent', () => {
  let component: ColorpickComponent;
  let fixture: ComponentFixture<ColorpickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorpickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
