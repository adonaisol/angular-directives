import { Directive, ElementRef, Renderer, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {
  @Input('colornum') colornum : number;
  
  myColor: string[] = ['red', 'green', 'yellow', 'blue', 'gray']
  @Output('output') colorChange = new EventEmitter();
  constructor(private elem: ElementRef, private ren: Renderer) {}
  @HostListener('click') changeColor(){
    this.colorChange.emit(this.myColor[this.colornum])
  }
  ngOnInit(){
      //this.ren.setElementStyle(this.elem.nativeElement, 'color', this.myColor[0]);
      console.log(this.colornum);
  }
  
}
