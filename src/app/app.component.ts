import { Component, Input } from '@angular/core';
import {lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name  :string
  date :string 
  amount :number
  height :number
  mile :number
  
  constructor() { 

  }

  onChangename(input :string ) { 
    this.name = input; 
  }

  onChangedate(input :string ) { 
    this.date = input; 
  }
  onChangeamount (input :string) { 
      this.amount = parseFloat(input); 
  }
  onChangeHeight(input :string ){

    this.height = parseFloat(input) 
  }
  onChangeMiles(input :string ) { 
    this.mile = parseFloat(input); 
  }
}
