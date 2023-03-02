import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputUppercase]'
})
export class UppercaseDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput() {
    this.elem.nativeElement['value'] = this.elem.nativeElement['value'].toUpperCase()
    console.log(this.elem.nativeElement['value'])
  }
}
