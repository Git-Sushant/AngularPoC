import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit,OnChanges {
 
  previousValue: any;
  currentValue: any;
  firstChange: boolean;
 
  
@Input('appTemplate') condition:boolean;
  constructor( private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef) { }

 

  ngOnChanges(changes:SimpleChanges): void {
   console.log('change',changes);
   if (this.condition) {
    this.viewContainer.createEmbeddedView(this.templateRef);
   } else {
    this.viewContainer.clear();
   } 

  }

  ngOnInit(): void {
  }
}
