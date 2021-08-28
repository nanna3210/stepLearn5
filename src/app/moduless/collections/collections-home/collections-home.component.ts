import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  constructor() { }

    data = [
      {name:"nanna " , age :31, job :'Engineer' ,  employed:true }, 
      {name:"nanna Das " , age :29, job :'Developer', employed:false}, 
      {name:"nanna Bhai" , age :30, job :'Manager' , employed:true}
    ]
    headers = [
      {key :'name' ,label :"Name" }, 
      {key :'age' ,label :"Age"  }, 
      {key :'job' ,label :"Job"  },
      {key :'employed' , label:'Has A Job ?'}

    ]


  ngOnInit(): void {
  }

}
