import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  template: `
    <div> Question 1
      <ul>
        <li *ngFor="let listItem of str, let i = index" myColor colornum = {{i}} (output) = "changeColor($event)" [ngStyle]="{color: myColor}" upper>{{listItem}}</li>
      </ul> 
    </div>
  `,
  styles: ['li {cursor : pointer;}']
})
export class UnorderedListComponent {
  myColor : string;
  @Input() str: string[];
  @Input('output') output: string;

  changeColor(val: string){
      console.log("The input is " + val);
      this.myColor = val;
  } 

}
