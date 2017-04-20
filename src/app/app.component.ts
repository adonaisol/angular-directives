import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag : boolean;
  constructor (){
    this.flag = false;
    console.log('setting flag to true')
  }
  title = 'Angular Directives Exercise';
  str = ['Dog', 'Cat', 'Rabbit', 'Fish', 'Horse'];
  
}
