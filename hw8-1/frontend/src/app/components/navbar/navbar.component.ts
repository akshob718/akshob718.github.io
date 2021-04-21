import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //public title: string = "Nav Bar";
  screenSize: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.screenSize = this.breakpointObserver.isMatched('(max-width: 599px)');
  }

}
