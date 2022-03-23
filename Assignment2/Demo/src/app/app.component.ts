import { getSafePropertyAccessString } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  public Pipes="This is angular example";
  public msg ="Angularexample";
  public date= new Date();
   person={name:"Jone", place:"Hyderabad", code:"Hyd"};
                 // {name:"Mark", place:"Gnt"},
                 // {name:"Sai", place:"Ny"}   ];
  
 
  }
  



