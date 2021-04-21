import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import {HomePageService} from '../../services/home-page.service';
import { debounceTime, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie-tv-details',
  templateUrl: './movie-tv-details.component.html',
  styleUrls: ['./movie-tv-details.component.css']
})
export class MovieTvDetailsComponent implements OnInit {
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
  pic: string = '';
  tweet: string = '';
  face: string = '';
  name: string = '';
  buttonState: string = "";
  alertType: string = "";
  category: string = '';
  id: number = 0;

  private _success = new Subject<string>();
  storageStructure = {};
  cache: any = [];

  contStructure = {};
  contCache: any = [];
  flag: boolean = false;

  successMessage = '';
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  constructor(private route: ActivatedRoute, private homePageService: HomePageService) { }

  ngOnInit(): void {      
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(1000000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
    this.fetchData();    
  }

  watchList(mediaType: string, mediaId: number){
    var ls = localStorage.getItem('watchList');
    var obj = JSON.parse(ls || '[]');
    var index = 0; var ind = -1;

    if(this.buttonState == "Add to Watchlist"){
      this.buttonState = "Remove from Watchlist";
      this.alertType = "success";
      this._success.next("Added to watchlist.");

      // Add movie to watch list
      if(obj && obj.length > 0){
        obj.forEach((item: any) => {
          if(item["id"] === mediaId) {
            ind = obj.indexOf(item);
          }
        })
        if(ind == -1){
          this.storageStructure = {"media": mediaType, "id": mediaId, "name" : this.name, "picture" : this.pic};
          obj.push(this.storageStructure);
          localStorage.setItem("watchList", JSON.stringify(obj));
        }
      }
      else{
        this.storageStructure = {"media": mediaType, "id": mediaId, "name" : this.name, "picture" : this.pic};
        this.cache.push(this.storageStructure);
        localStorage.setItem("watchList", JSON.stringify(this.cache));
      }
    }

    else if(this.buttonState == "Remove from Watchlist"){
      this.buttonState = "Add to Watchlist";
      this.alertType = "danger";
      this._success.next("Removed from watchlist.");

      // Remove movie from Watchlist
      obj.forEach((item: any) => {
        if(item["id"] === mediaId) {
          index = obj.indexOf(item);
          obj.splice(index, 1);
        }
      });   
      localStorage.setItem("watchList", JSON.stringify(obj));
    }
    
  }


  fetchData(){
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.id = params['id']
    });        

    this.homePageService.getDetails(this.id, this.category).subscribe(res => {
      var localList = localStorage.getItem('watchList');
      var localObj = JSON.parse(localList || '[]');
      var contList = localStorage.getItem('continueList');
      var contObj = JSON.parse(contList || '[]');
      var index = -1;
      var i = -1;
      var check = false;      
      console.log(localStorage); 

      this.data = res;
      this.data = this.data[0]  
      this.videoId = this.data['key']
      this.pic = 'https://image.tmdb.org/t/p/w500' + this.data['poster_path']
      console.log("picture for localstorage", this.pic);
      
      //console.log(this.category);
      if (this.category == "movie"){
      this.title = this.data['title']
      } else {
        this.title = this.data['title']
        //console.log(this.data);
      }
      this.tagline = this.data['tagline']
      this.release_date = this.data['release_date'].slice(0,4)
      this.vote_average = this.data['vote_average']
      if (this.data['runtime'] > 60)
        this.runtime = Math.trunc(this.data['runtime']/60) + "hrs " + this.data['runtime']%60 + "mins"
      else if(this.data['runtime'] = 60)
        this.runtime = Math.trunc(this.data['runtime']/60) + "hr"
      else
        this.runtime = this.data['runtime']%60 + "mins"
      
      //console.log(this.data['genres']);
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
      console.log(this.tweet);
      
      console.log(this.data);
      if(localObj && localObj.length > 0){
        for(let i = 0; i < localObj.length; i++){
          if(this.id == localObj[i]["id"]){
            index = localObj.indexOf(localObj[i]);
            check = true;
            break;
          }
        }
        if(check){
          this.buttonState = "Remove from Watchlist";
          localObj.push(localObj[index]);
          localObj.splice(index, 1);
          localStorage.setItem("watchList", JSON.stringify(localObj));
        }
        else{
          this.buttonState = "Add to Watchlist";
        }
      }
      else{
        this.buttonState = "Add to Watchlist";
      }

      if(contObj && contObj.length > 0){
        contObj.forEach((item: any) => {
          if(item["id"] === this.id) {
            i = contObj.indexOf(item);
          }
        })

        if(i == -1){
          if(contObj.length > 25){
            contObj.splice(0, 1);
            localStorage.setItem("continueList", JSON.stringify(contObj));
          }

          this.contStructure = {"media": this.category, "id": this.id, "name" : this.title, "picture" : 'https://image.tmdb.org/t/p/w500' + this.data['poster_path']};
          contObj.push(this.contStructure);
          localStorage.setItem("continueList", JSON.stringify(contObj));
        }
        else if(i > -1){
           contObj.push(contObj[i]);
           contObj.splice(i, 1);
           localStorage.setItem("continueList", JSON.stringify(contObj));
        }
      }
      else{
        this.contStructure = {"media": this.category, "id": this.id, "name" : this.name, "picture" : 'https://image.tmdb.org/t/p/w500' + this.data['poster_path']};
        this.contCache.push(this.contStructure);
        localStorage.setItem("continueList", JSON.stringify(this.contCache));
      }
      console.log(contObj);
      
    });
    
}
}
