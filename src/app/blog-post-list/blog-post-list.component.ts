import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataServiceService } from '../blog-data-service.service';
/* import { QueryList } from '@angular/core/src/render3'; */
@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {

   blogpost:  BlogPost[][];
   currentPage: number;
  @ViewChildren('tile') blogPostTile=new QueryList<BlogPostTileComponent>()
  constructor(private blogData:BlogDataServiceService) { }

  ngOnInit() {
    /* this.blogpost.push(new BlogPost('Blog Post 1','Summary 1'));
    this.blogpost.push(new BlogPost('Blog Post 2',"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")); */
    this.currentPage=0;
    this.blogpost=this.blogData.getData();
  }

  updatePage(newPage){
   this.currentPage=newPage;
  }
  ExpandAll(){
    this.blogPostTile.forEach(e=>e.ShowFullSummary());
  }
  FavouriteAll(){
    this.blogpost[this.currentPage].forEach
  }
  
}
