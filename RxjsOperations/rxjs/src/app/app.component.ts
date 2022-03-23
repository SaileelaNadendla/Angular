import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'rxjs';

  Flowers=["rose","lily","jasmine"];
  isDisabled=true;
  getMethod(){

  }
  addNewItem(newFlower: string){
    this.Flowers = [...this.Flowers, newFlower];
    console.log(this.Flowers)
    


  }
  constructor(){}
}
