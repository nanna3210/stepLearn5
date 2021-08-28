import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { time } from 'console';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {



  constructor(private templateref:TemplateRef<any>, private viewContainer:ViewContainerRef) { }

  @Input('appTimes') set render(times  : number) { 
    this.viewContainer.clear(); 
    for (let index = 0; index < times; index++) {
      this.viewContainer.createEmbeddedView(this.templateref, {}); 
      
    }
  }

}
