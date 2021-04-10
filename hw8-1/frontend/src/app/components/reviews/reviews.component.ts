import { Component, OnInit } from '@angular/core';
import {HomePageService} from '../../services/home-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public data: any;
  count: any;
  author_name: any;

  constructor(private route: ActivatedRoute, private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    let category = ''
    let id = 0
    this.route.params.subscribe(params => {
      category = params['category'];
      id = params['id']
    });   
    this.homePageService.getReviews(id, category).subscribe(res => {
      this.data = res;         
      console.log(this.data);      
      this.count = this.data.length;      
    });
  }

}
