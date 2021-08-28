import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statictics',
  templateUrl: './statictics.component.html',
  styleUrls: ['./statictics.component.css']
})
export class StaticticsComponent implements OnInit {

  constructor() { }

  @Input() data = []; 
  ngOnInit(): void {
  }

}
