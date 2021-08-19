import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  posts = [

    {
      title : "A clean  beautiful tree ",
      imageurl : "assets/tree.jpeg" ,
      userName  :"nannadas" ,
      content :  "saw a beautiful tree while hiking the jungle "
    
    
    }, 
    {
      title : "A beautifull snowy maountain ", 
      imageurl : "assets/mountain.jpeg", 
      userName  : "mountainlover", 
      content :  "Its A beautifull moment of life when you  get to see a  lovely  maountain near you "
    
    
    },
    {
      title : "A beautifull snowy maountain ", 
      imageurl : "assets/mountain.jpeg", 
      userName  : "mountainlover", 
      content :  "Its A beautifull moment of life when you  get to see a  lovely  maountain near you "
    
    
    },
    {
      title : "A beautifull snowy maountain ", 
      imageurl : "assets/mountain.jpeg", 
      userName  : "mountainlover", 
      content :  "Its A beautifull moment of life when you  get to see a  lovely  maountain near you "
    
    
    },
     
     

    {
      title : " Mountain biking ", 
      imageurl :"assets/mountainbiking.jpeg",  
      userName  : "superbiker", 
      content :  "thats littera;;y a fun riding bike in mountain "
    
    
    }

  ];

  constructor() { 

  }
   
}
