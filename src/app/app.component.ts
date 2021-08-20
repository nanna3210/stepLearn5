import { Component } from '@angular/core';
import {lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  randomText = lorem.sentence()
  enteredText = '';
  constructor() { 

 
      
  }
   
  onInput(input :string) {
    this.enteredText=input;
    
  }
  compare(randomText:string, enteredText:string) { 
    if (!enteredText){ 
      return "pending"
    }
    return (enteredText === randomText) ? 'correct':'incorrect'
  }
}
