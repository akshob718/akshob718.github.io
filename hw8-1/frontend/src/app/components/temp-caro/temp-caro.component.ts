import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-temp-caro',
  templateUrl: './temp-caro.component.html',
  styleUrls: ['./temp-caro.component.css']
})
export class TempCaroComponent implements OnInit{

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  public images: any [][] = [];
  public data: any;
  resumeWatching = [];
  totalRW: any [][] = [];
  constructor(private homePageService: HomePageService) {}

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
    this.homePageService.getPopularMoviesData().subscribe(res => {
      this.data = res;         
      let img = [];
      var tempContList: any[] = [];

      var contData = localStorage.getItem('continueList');
      var contListData = (JSON.parse(contData || '[]')).reverse();

      for (var i =0; i<this.data.length; i++){
        if (i!=0 && i%6 == 0){           
          this.images.push(img)          
          img = [] 
        }
        img.push(this.data[i]);        
      }          
      this.images.push(img)    

      if(contListData && contListData.length > 0){
        this.resumeWatching = contListData;
      }

      for(let i = 0; i < this.resumeWatching.length; i++){
        // Push 6 items at once
        if(tempContList.length == 6){
          this.totalRW.push(tempContList);
          tempContList = [];
        }
        tempContList.push(this.resumeWatching[i]);
      }

      if(tempContList.length != 0){
        this.totalRW.push(tempContList);
      }
    });
  }
 }
