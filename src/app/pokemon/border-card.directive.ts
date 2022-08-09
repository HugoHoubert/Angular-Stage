import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmbordercard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input('pkmbordercard') borderColor: string; //alias 

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseleave() {
    this.setBorder('#f5f5f5');
  }

    setHeight(height: number) {
        this.el.nativeElement.style.height = `${height}px`;
    }
    setBorder(color: string) {
        this.el.nativeElement.style.border = `4px solid ${color}`;
    }
}
