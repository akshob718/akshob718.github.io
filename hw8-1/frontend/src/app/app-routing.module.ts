import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FirstChildComponent } from './components/first-child/first-child.component';
import { FirstTabChildComponent } from './components/first-tab-child/first-tab-child.component';
import { FirstTabComponent } from './components/first-tab/first-tab.component';
import { FirstTvComponent } from './components/first-tv/first-tv.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieTvDetailsComponent } from './components/movie-tv-details/movie-tv-details.component';
import { SecondTabComponent } from './components/second-tab/second-tab.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';

const routes: Routes = [  
  // {path: '', component: LandingPageComponent},  
  {path: '', component: FirstTabComponent},
  {path: 'mylist', component: SecondTabComponent},
  {path: 'watch/:category/:id', component: MovieTvDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
