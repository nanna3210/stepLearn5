import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  constructor() { }

  stats =[
    {value:22, label :"No of users "}, 
    {value:94, label :"revenue "}, 
    {value:55, label :"reviews  "}
  ]
  
  item =[
    {imageurl:'/assets/dresser.jpeg', titile  :"Dresser  " , description :"This Is a fantastic dreseer "}, 
    {imageurl:'/assets/couch.jpeg', titile  :"couch  " , description :"This Is a fantastic couch to rest on  "} 
    
  ]
  ngOnInit(): void {
  }

}
