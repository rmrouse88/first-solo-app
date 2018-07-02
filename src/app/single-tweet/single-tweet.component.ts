import { Component, OnInit } from '@angular/core';

import { TweetListService } from '../core/tweet-list.service'
import { ITweet } from '../interfaces/tweet.interface'

import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { calendar } from 'octicons';

@Component({
  selector: 'app-single-tweet',
  templateUrl: './single-tweet.component.html',
  styleUrls: ['./single-tweet.component.css']
})
export class SingleTweetComponent implements OnInit {
  pageTitle = "Tweet Listing"

  tweets: ITweet[] = [];

  public calendarIcon: SafeHtml;

  constructor(private tweetListService: TweetListService,
              private sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.calendarIcon = this.sanitizer.bypassSecurityTrustHtml(calendar.toSVG());

    this.tweetListService.find_one()
      .subscribe(
        (data:ITweet[]) => {
          this.tweets = data;
          console.log(data);
          console.log('subscribed to observable')
        },
        (err: any) => console.log(err))
  }

  


}
