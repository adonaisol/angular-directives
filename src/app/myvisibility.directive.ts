import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myVisibility]'
})
export class MyvisibilityDirective implements OnInit{
  @Input() myVisibility: boolean;
  
  constructor(private elem: ElementRef, private ren: Renderer) {
    
  }
  
  ngOnInit(){
    console.log("Visible: " +this.myVisibility);
    if(this.myVisibility == true)
    this.ren.setElementStyle(this.elem.nativeElement, 'visibility', 'hidden');
    else this.ren.setElementStyle(this.elem.nativeElement, 'visibility', 'visible')
  }
}
