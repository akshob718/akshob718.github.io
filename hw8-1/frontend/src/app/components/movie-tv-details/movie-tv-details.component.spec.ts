import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTvDetailsComponent } from './movie-tv-details.component';

describe('MovieTvDetailsComponent', () => {
  let component: MovieTvDetailsComponent;
  let fixture: ComponentFixture<MovieTvDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTvDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
