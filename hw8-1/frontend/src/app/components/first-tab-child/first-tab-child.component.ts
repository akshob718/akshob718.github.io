import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HomePageService} from '../../services/home-page.service';

@Component({
  selector: 'app-first-tab-child',
  templateUrl: './first-tab-child.component.html',
  styleUrls: ['./first-tab-child.component.css']
})
export class FirstTabChildComponent implements OnInit {
  public category: number = 0;
  public data: any;
  public videoId: any;
  public title = '';
  public tagline = '';
  release_date: any;
  vote_average: any;
  runtime: string = '';
  genres: string = '';
  spoken: string = '';
  desc: string = '';
  tweet: string = '';
  face: string = '';
  constructor(private route: ActivatedRoute, private homePageService: HomePageService) { }

  ngOnInit(): void {      
    this.fetchData();    
  }


  fetchData() {
    let category = ''
    let id = 0
    this.route.params.subscribe(params => {
      category = params['category'];
      id = params['id']
    });        
    this.homePageService.getDetails(id, category).subscribe(res => {
      this.data = res;
      this.data = this.data[0]  
      this.videoId = this.data['key']
      this.title = this.data['title']
      this.tagline = this.data['tagline']
      this.release_date = this.data['release_date'].substr(0,4)
      this.vote_average = this.data['vote_average']
      this.runtime = Math.trunc(this.data['runtime']/60) + "hrs " + this.data['runtime']%60 + "mins"
      for(var i = 0; i < this.data['genres'].length; i++){
        this.genres += this.data['genres'][i]['name']
        if (i < this.data['genres'].length-1){
          this.genres += ", "
        }
      }

      for(var i = 0; i < this.data['spoken_languages'].length; i++){
        this.spoken += this.data['spoken_languages'][i]['english_name']
        if (i < this.data['spoken_languages'].length-1){
          this.spoken += ", "
        }
      }

      this.desc = this.data['overview']
      this.tweet = "Watch "+ this.title + "%0A" + "https://www.youtube.com/watch?v=" + this.videoId + "%0A%23USC%20%23CSCI571%20%23FightOn";
      this.face = "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.youtube.com/watch?v=" + this.videoId
      //console.log(this.tweet);
      //console.log("----------------------------------------------------------here");
      //console.log(this.data);
      
    });
    
}

}
