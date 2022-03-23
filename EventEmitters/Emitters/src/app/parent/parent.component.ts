import { AfterViewInit, Component,  OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {

  data="this is from parent";
  @ViewChild(ChildComponent) child: any;
  
  constructor() { }
  message!:string ;
  ngAfterViewInit(){
    this.message=this.child.message;
  }


  ngOnInit(): void {
  }

}
