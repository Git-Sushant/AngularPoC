import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() NumberOfPages;
  pages: number[];

  @Output() pageNumberClick=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.pages=new Array(this.NumberOfPages);
  }

  PageNumberClicked(pageNumber){
    this.pageNumberClick.emit(pageNumber)
  }

}
