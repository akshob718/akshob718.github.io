import { Component, OnInit } from '@angular/core';
import {HomePageService} from '../../services/home-page.service'

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.css']
})
export class FirstTabComponent implements OnInit {
  public data: any = [];

  constructor(private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.homePageService.getData().subscribe(res => {
      this.data = res;      
    });
  }

}
