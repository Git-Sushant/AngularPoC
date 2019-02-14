import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ HiddenDirective} from './hidden.directive';
import { TemplateDirective } from './template.directive';
import { VisibilityDirective } from './visibility.directive'

@NgModule({
  declarations: [
    HiddenDirective,
    TemplateDirective,
    VisibilityDirective
  

  ],
  imports: [
    CommonModule


  ],
  exports:[
    HiddenDirective,
    TemplateDirective,
    VisibilityDirective
  ]
})
export class SharedModule { }

