import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCaroComponent } from './temp-caro.component';

describe('TempCaroComponent', () => {
  let component: TempCaroComponent;
  let fixture: ComponentFixture<TempCaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempCaroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
