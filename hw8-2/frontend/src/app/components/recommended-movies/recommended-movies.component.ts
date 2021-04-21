import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomePageService } from '../../services/home-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.css']
})
export class RecommendedMoviesComponent implements OnInit {
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  public images: any[][] = [];
  public data: any;
  constructor(private route: ActivatedRoute, private homePageService: HomePageService) {}

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

  fetchData(){
    let category = ''
    let id = 0
    this.route.params.subscribe(params => {
      category = params['category'];
      id = params['id']
    });   
    this.homePageService.getRecommendations(id, category).subscribe(res => {
      this.data = res;    
      let img = [];
      for (var i =0; i<this.data.length; i++){
        if (i!=0 && i%6 == 0){           
          this.images.push(img)
          img = [] 
        }
        img.push(this.data[i]);        
      }          
      this.images.push(img)    
         
    });
  }
}
