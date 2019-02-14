import { Component, OnInit, ViewChild } from '@angular/core';
import { VisibilityDirective } from '../shared/visibility.directive';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
val:boolean;
show:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  toggle(flag){
    this.show=flag;
    
  }
 
  
}
