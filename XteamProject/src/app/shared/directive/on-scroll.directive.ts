import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnScroll]',
})
export class OnScrollDirective {
  constructor(private _el: ElementRef) {}
  //HostListener mean the Element he kack a Selector for directive
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this._el.nativeElement.classList.add('fixed-top');

    } else {
      this._el.nativeElement.classList.remove('fixed-top');



    }
  }
}
