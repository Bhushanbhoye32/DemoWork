import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShoppyCart2';

  count=0;
  arr1:any[]=[];
  constructor()
  {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((res)=>res.json())
    .then((data)=>this.arr1=data)
  }
  inc()
  {
    this.count++;
    alert("Item Added to Cart")
  }
  dec()
  {
    if(this.count>0)
    this.count--;
  }
}
