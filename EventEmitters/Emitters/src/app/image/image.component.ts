import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  index:number=2;
  imageIndex=2;
  imageArray=[""]
  change(value1:any){
    this.imageIndex=value1;
  }
  next(){
    let x= this.imageArray.shift();
    if(x!=undefined){
      this.imageArray.push(x);
    }

  }
  pervious(){
    let x=this.imageArray.pop();
    if(x!=undefined){
      this.imageArray.unshift(x);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
