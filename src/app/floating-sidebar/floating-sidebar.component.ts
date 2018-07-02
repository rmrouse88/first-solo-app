import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { star, tag, stop, tasklist } from 'octicons';


@Component({
  selector: 'app-floating-sidebar',
  templateUrl: './floating-sidebar.component.html',
  styleUrls: ['./floating-sidebar.component.css']
})
export class FloatingSidebarComponent  {

  star:SafeHtml;
  tag:SafeHtml;
  stop:SafeHtml;
  tasklist:SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  // ngOnInit() {
  //   this.star = this.sanitizer.bypassSecurityTrustHtml(star.toSVG())
  //   this.tag = this.sanitizer.bypassSecurityTrustHtml(tag.toSVG())
  //   this.stop = this.sanitizer.bypassSecurityTrustHtml(stop.toSVG())
  //   this.tasklist = this.sanitizer.bypassSecurityTrustHtml(tasklist.toSVG())
  // }

}
