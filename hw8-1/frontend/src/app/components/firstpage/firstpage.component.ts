import { Component, OnInit } from '@angular/core';
import { PostsService }from '../../services/posts.service';


@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  public message: string = "Passing the data";
  public posts: any = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.postsService.getAllPost().subscribe(res => {
      this.posts = res;
    });
  }

}
