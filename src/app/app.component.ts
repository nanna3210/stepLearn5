import { Component, Input } from '@angular/core';
import {lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  currentPage =0; 
  constructor() { 

  }

  images  = [
    {
      title : "Black Rabbit ", 
      imageurl : "https://images.unsplash.com/photo-1616693195958-efece261e016?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    {
      title : "Body of water  ", 
      imageurl : "https://images.unsplash.com/photo-1629193266680-9193cc4a0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }, 
    
    {
      title : "Smiling face ", 
      imageurl : "https://images.unsplash.com/photo-1593215261340-ca189da98636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    }

  ]
}
