import { Directive, ElementRef, Renderer, HostListener, Input, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Button } from 'protractor';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {
 RemButton:any;
 Newbutton:any;
 @ViewChildren('') mybutton:ElementRef; 
 @ViewChild('myButton') myDiv: ElementRef;
  constructor(private myEle:ElementRef ,private renderer:Renderer) { }

  @HostListener('mouseover') mouseover() {
    /* window.alert('mouse over') */
   
   
  }
  @HostListener('mouseenter') onMouseEnter() {
    /* this.Newbutton =document.createElement("button") */
    /* this.renderer.setElementStyle(this.myEle.nativeElement,'display','block'); */
    /* this.renderer.createElement("button");
    this.Newbutton= this.renderer.addClass(this.mybutton.nativeElement,"btn btn-danger");
    this.renderer.appendChild(this.myEle.nativeElement,this.Newbutton); */
    this.renderer.setElementStyle(this.myEle.nativeElement,'background','#b3a6d8');
    console.log('hover');

  }
  @HostListener('mouseleave') onMouseLeave() {
   
    /* this.renderer.setElementStyle(this.myEle.nativeElement,'display','none'); */
    console.log('leave');
    this.renderer.setElementStyle(this.myEle.nativeElement,'background','silver');
  }

  
}
