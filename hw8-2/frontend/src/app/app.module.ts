import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { CommonpageComponent } from './components/commonpage/commonpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchOptionComponent } from './components/search-option/search-option.component';
import { FirstTabComponent } from './components/first-tab/first-tab.component';
import { FirstTabChildComponent } from './components/first-tab-child/first-tab-child.component';
import { SecondTabComponent } from './components/second-tab/second-tab.component';
import { FirstTvComponent } from './components/first-tv/first-tv.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { TempCaroComponent } from './components/temp-caro/temp-caro.component';
import { TrMoviesComponent } from './components/tr-movies/tr-movies.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { PopularTvComponent } from './components/popular-tv/popular-tv.component';
import { TopRatedTvShowsComponent } from './components/top-rated-tv-shows/top-rated-tv-shows.component';
import { TrendingTvShowsComponent } from './components/trending-tv-shows/trending-tv-shows.component';
import { MovieTvDetailsComponent } from './components/movie-tv-details/movie-tv-details.component';
import { FullCastCrewComponent } from './components/full-cast-crew/full-cast-crew.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { RecommendedMoviesComponent } from './components/recommended-movies/recommended-movies.component';
import { SimilarMoviesComponent } from './components/similar-movies/similar-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomepageComponent,
    FirstpageComponent,
    SecondpageComponent,
    CommonpageComponent,
    NavbarComponent,
    SearchOptionComponent,
    FirstTabComponent,
    FirstTabChildComponent,
    SecondTabComponent,
    FirstTvComponent,
    PopularMoviesComponent,
    TempCaroComponent,
    TrMoviesComponent,
    TrendingMoviesComponent,
    PopularTvComponent,
    TopRatedTvShowsComponent,
    TrendingTvShowsComponent,
    MovieTvDetailsComponent,
    FullCastCrewComponent,
    ReviewsComponent,
    RecommendedMoviesComponent,
    SimilarMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
