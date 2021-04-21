import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCastCrewComponent } from './full-cast-crew.component';

describe('FullCastCrewComponent', () => {
  let component: FullCastCrewComponent;
  let fixture: ComponentFixture<FullCastCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCastCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCastCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
