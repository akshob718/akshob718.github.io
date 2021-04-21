import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTabChildComponent } from './first-tab-child.component';

describe('FirstTabChildComponent', () => {
  let component: FirstTabChildComponent;
  let fixture: ComponentFixture<FirstTabChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTabChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTabChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
