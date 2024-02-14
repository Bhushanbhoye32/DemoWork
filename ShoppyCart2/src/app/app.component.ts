import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShoppyCart2';

  @ViewChild('header') hc:any

  count=0;
  arr1:any[]=[];
  constructor()
  {
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>this.arr1=data)
  }
  inc()
  {
    this.count++;
  }
  dec()
  {
    if(this.count>0)
    this.count--;
  }
}
