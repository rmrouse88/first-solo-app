import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appTweetStyle]'
})
export class TweetStyleDirective {
  
  @Input('appTweetStyle') highlightColor:string;
  
  constructor(private el:ElementRef,
            private renderer:Renderer2) { }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
  
  private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
 

