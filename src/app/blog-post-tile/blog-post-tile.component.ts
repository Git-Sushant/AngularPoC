import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';


@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {

 /*  @Input() title:string;
  @Input() summary:string; */
 fullsummary:string;
 @Input() post:any;

  constructor( private truncatePipe:TruncatePipe ) { }

  ngOnInit() {
    /* this.title="Blog Title";
    this.summary="Blog post summary"; */
    this.fullsummary=this.post.summary;
    this.post.summary=this.truncatePipe.transform(this.post.summary,100)
  }

  ShowFullSummary(){
    this.post.summary=this.fullsummary;
  }

  toggleFav(){
    this.post.IsFav=!this.post.IsFav;
  }
}
