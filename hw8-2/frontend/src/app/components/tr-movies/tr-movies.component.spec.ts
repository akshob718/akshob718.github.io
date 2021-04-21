import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrMoviesComponent } from './tr-movies.component';

describe('TrMoviesComponent', () => {
  let component: TrMoviesComponent;
  let fixture: ComponentFixture<TrMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
