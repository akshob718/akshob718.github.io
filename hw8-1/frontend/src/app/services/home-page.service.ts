import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    //let URL = "http://localhost:8080/apis571/trending"
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/trending"
    return this.httpClient.get(URL);
  }
  getPopularMoviesData(){
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/popularmovies"
    return this.httpClient.get(URL);
  }
  getTopRatedMoviesData(){
    //console.log("Getting top rated movie data");
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/topRatedMovies"
    return this.httpClient.get(URL);
  }

  getTrendingMoviesData() {
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/trending_movies"
    return this.httpClient.get(URL);
  }

  getPopularTVData() {
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/popular_tv"
    return this.httpClient.get(URL);
  }

  getTopRatedTVShows() {
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/top_rated_tv"
    return this.httpClient.get(URL);
  }

  getTrendingTVShows() {
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/trending_tv_shows"
    return this.httpClient.get(URL);
  }

  getDetails(id: number, category: string){
    // id = 299534;
    // category = "movie";
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/watch/"+category+"/"+id;
    console.log("Getting details for youtube");
    console.log(URL);
    return this.httpClient.get(URL)
  }
  // getSearchData(query: any){
  //   let URL = "http://localhost:8080/searchData/"+query
  //   // return this.httpClient.get(URL)
  //   this.httpClient.get(URL)
  // }

  getReviews(id: number, category: string){
    // id = 299534;
    // category = "movie";
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/review/"+category+"/"+id;
    return this.httpClient.get(URL)
  }

  getRecommendations(id: number, category: string) {
    // id = 299534;
    // category = "movie";
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/recommend/"+category+"/"+id;
    return this.httpClient.get(URL)
  }

  getSimilars(id: number, category:string) {
    // id = 299534;
    // category = "movie";
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/similar/"+category+"/"+id;
    return this.httpClient.get(URL)
  }

  getCast(id: number, category: string){
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/cast/"+category+"/"+id;
    return this.httpClient.get(URL)
  }

  getCastDetails(id: number){
    let URL = "https://myprojectfinal-310305.wl.r.appspot.com/apis571/castDetails/"+id;
    return this.httpClient.get(URL)
  }
}
