import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items = []; 
  openedItemindex  ; 

  constructor() { }

  ngOnInit(): void {
  }

  onClickTT(index :number) {
    if (index === this.openedItemindex) { 
      this.openedItemindex= -1; 
    }
    else  { 
      this.openedItemindex = index; 

    }
    
    // console.log(this.openedItemindex);
    
  }

}
