import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.css']
})
export class SecondTabComponent implements OnInit {

  watchListData = [];
  mainText: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }


  routePage(Mtype: string, Mid: number){
    this.router.navigate(['/watch/' + String(Mtype) + '/' + String(Mid)]);
  }

  fetchData(){
    var cacheData = localStorage.getItem('watchList');
    var myListData = (JSON.parse(cacheData || '[]')).reverse();;

    if(myListData && myListData.length > 0){
      this.watchListData = myListData;
      console.log(this.watchListData);
      
    }
    else{
        this.mainText = "No items found in Watchlist."
    }
  }

}