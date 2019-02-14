import { Directive,ElementRef, Renderer, OnInit, Input, Renderer2 } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
  selector: '[myHidden]'
})
export class HiddenDirective implements OnInit {
 
  @Input('myHidden') Hidden:boolean;

  constructor(public el:ElementRef,public renderer :Renderer) {

   
    
   }

  ngOnInit(): void{
   
    console.log(this.el);
    if(this.Hidden){
      this.renderer.setElementStyle(this.el.nativeElement,'color','red');
      this.renderer.setElementStyle(this.el.nativeElement,'','red');
  
    }
    else{
      this.renderer.setElementStyle(this.el.nativeElement,'color','blue'); 
    }

  }


}
