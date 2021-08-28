import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css']
})
export class ModshomeComponent implements OnInit {

  openModal =false;
  constructor() { }

  ngOnInit(): void {
  }
  onclick() {

    this.openModal= !this.openModal;
  }

}
