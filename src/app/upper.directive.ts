import { Directive, ElementRef, Renderer, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private elem: ElementRef, private ren: Renderer) { }

   ngOnInit(){
      let myElemText = this.elem.nativeElement.InnerText;
      console.log(myElemText);
      this.ren.setText(this.elem.nativeElement, myElemText ? myElemText.toUpperCase() : myElemText)
      this.ren.setElementStyle(this.elem.nativeElement, 'text-transform', 'uppercase')
   }
}
