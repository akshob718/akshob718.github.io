import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTvComponent } from './first-tv.component';

describe('FirstTvComponent', () => {
  let component: FirstTvComponent;
  let fixture: ComponentFixture<FirstTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
