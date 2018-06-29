import { Component, OnInit } from '@angular/core';

import { TweetListService } from '../core/tweet-list.service'
import { ITweet } from '../interfaces/tweet.interface'

@Component({
  selector: 'app-single-tweet',
  templateUrl: './single-tweet.component.html',
  styleUrls: ['./single-tweet.component.css']
})
export class SingleTweetComponent implements OnInit {
  pageTitle = "Single Tweet Viewer"

  tweet:ITweet;

  constructor(private tweetListService: TweetListService) { }

  ngOnInit() {
    this.tweetListService.find_one()
      .subscribe(
        (data: ITweet) => {
          this.tweet = data,
          console.log(data)
        },
        (err: any) => console.log(err))
  }
}
