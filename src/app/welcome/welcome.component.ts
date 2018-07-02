import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle = 'OTC 2018 Roundup'

  constructor() { }

  ngOnInit() {
  }

}
