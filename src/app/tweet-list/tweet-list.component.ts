import { Component, OnInit } from '@angular/core';
import * as mongodb from 'mongodb';

import { TweetListService } from '../core/tweet-list.service';
import { IProduct } from './product';

@Component({
  // selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})

export class TweetListComponent implements OnInit {

  constructor(private tweetListService: TweetListService) { }

  url:string = 'https://raw.githubusercontent.com/DeborahK/Angular-GettingStarted/master/APM-Final%20V6/src/api/products/products.json';

  products:IProduct[] = null

  ngOnInit() {
    this.tweetListService.get_products(this.url)
      .subscribe((value: IProduct[]) => console.log(value),
                  (error:any) => console.log(error))
  }

  mongodb
}
