import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTweetStyle]'
})
export class TweetStyleDirective {
  @input('appTweetStyle') highlightColor:string;
  @input('')

  
  constructor(private elementRef:ElementRef,
          private renderer:Renderer2) { }

}
