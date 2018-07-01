import { Component, OnInit } from '@angular/core';

import { TweetListService } from '../core/tweet-list.service'
import { ITweet } from '../interfaces/tweet.interface'

@Component({
  selector: 'app-single-tweet',
  templateUrl: './single-tweet.component.html',
  styleUrls: ['./single-tweet.component.css']
})
export class SingleTweetComponent implements OnInit {
  pageTitle = "Tweet Listing"

  tweets: ITweet[] = [];

  constructor(private tweetListService: TweetListService) { }

  ngOnInit() {
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
