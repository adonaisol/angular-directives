import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  template: `
    <div> Hello
      <ul>
        <li *ngFor = "let listItem of str">{{listItem}}</li>
      </ul> 
    </div>
  `,
  styles: []
})
export class UnorderedListComponent {
str : string[];
@Input() strArray(stringArray : string[]){
  for(let s of stringArray){
    this.str.push(s);
  }
}
  constructor() { 
    this.str = ['Dog', 'Cat', 'Animal', 'Fish'];
  }
}
