import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-tr-movies',
  templateUrl: './tr-movies.component.html',
  styleUrls: ['./tr-movies.component.css']
})
export class TrMoviesComponent implements OnInit {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  public images: any[][] = [];
  public data: any;
  constructor(private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  fetchData() {
    this.homePageService.getTopRatedMoviesData().subscribe(res => {
      this.data = res;
      let img = [];
      let n = [];
      let k = 0;
      while (k < this.data.length) {
        if (k != 0 && k % 6 == 0) {
          this.images.push(img)
          img = []
        }
        img.push(this.data[k]);
        n.push(this.data[k]['title'])
        k++;
      }
      this.images.push(img)
    });
  }
}
