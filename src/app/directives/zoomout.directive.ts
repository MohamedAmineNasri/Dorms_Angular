import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appZoomhover]'
})
export class ZoomoutDirective {

    // constructor(private el: ElementRef, private renderer: Renderer2) { }
    //
    // @HostListener('mouseenter') onMouseEnter() {
    //     this.zoom(0.6); // Increase the size by 20%
    // }
    //
    // @HostListener('mouseleave') onMouseLeave() {
    //     this.zoom(1.0); // Reset to the original size
    // }
    //
    // private zoom(scale: number) {
    //     this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
    //     this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease'); // Optional: Add a smooth transition
    // }
}
