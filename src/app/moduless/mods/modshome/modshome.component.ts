import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css']
})
export class ModshomeComponent implements OnInit {

  openModal =false;
  items = [
    {title : 'why is Music is best  ? ' ,content : 'it soothes you From inside ' }, 
    {title : 'what it Feels of music  ?' ,content : 'it makes you feel in love  ' }, 
    {title : 'what is the beautiful thing in thsi world ?' ,content : 'the obvious nature ..' }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onclick() {

    this.openModal= !this.openModal;
  }

}
