import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() classNames; 

  @Input() data = []; 
  @Input() headers = []; 

  color = ['primary', 'secondary', 'red', 'orange']

  ngOnInit(): void {
  }

}
