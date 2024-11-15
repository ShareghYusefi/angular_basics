import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorfulBG]',
  standalone: true,
})
export class ColorfulBGDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
  }
}
