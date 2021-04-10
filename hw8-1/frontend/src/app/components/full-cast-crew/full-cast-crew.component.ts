import { Component, OnInit } from '@angular/core';
import {HomePageService} from '../../services/home-page.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-full-cast-crew',
  templateUrl: './full-cast-crew.component.html',
  styleUrls: ['./full-cast-crew.component.css']
})
export class FullCastCrewComponent implements OnInit {
  public data: any;
  public castDetailObj: any;
  cast: any;
  constructor(private route: ActivatedRoute, private modalService: NgbModal, private homePageService: HomePageService, private config: NgbPopoverConfig) {}

  ngOnInit(): void {
    this.fetchData();    
  }

  openModal(data: any){
    this.modalService.open(data, { scrollable: true, size: 'lg'});
  }

  fetchDetails(id:number, data: any){
    console.log(id);    
    this.homePageService.getCastDetails(id).subscribe(res => {     
      this.cast = res
      this.cast = this.cast[0]
      
      this.openModal(data)
    })
  }

  fetchData(){
    let category = ''
    let id = 0
    this.route.params.subscribe(params => {
      category = params['category'];
      id = params['id']
    });   
    this.homePageService.getCast(id, category).subscribe(res => {
      this.data = res;           
      console.log(this.data);
            
    });
  }

}

