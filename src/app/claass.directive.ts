import { Directive, ElementRef, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appClaass]'
})
export class ClaassDirective {

  
  constructor( private elemennt  : ElementRef) {}



  @Input() set appClaass (color:string) { 

    // elemennt.nativeElement.style.backgroundColor =this.backgroundcolor;
      this.elemennt.nativeElement.style.backgrounColor = color; 
    console.log(this.elemennt.nativeElement.style.backgrounColor);
    

  }


}
