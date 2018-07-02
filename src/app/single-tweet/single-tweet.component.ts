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

  color:string = 'yellow'

  _filterValue:string;
  get filterValue():string {
    return this._filterValue;
  }

  set filterValue(value:string) { 
    console.log(`old filter value = ${this.filterValue}`);
    this._filterValue=value;
    console.log(`new filter value = ${this.filterValue}`);
    this.filteredTweets = this.filterValue ? this.performFilter(this.filterValue) : this.tweets;
  }

  tweets: ITweet[];

  filteredTweets: ITweet[];

  public calendarIcon: SafeHtml;

  constructor(private tweetListService: TweetListService,
              private sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.calendarIcon = this.sanitizer.bypassSecurityTrustHtml(calendar.toSVG());

    this.tweetListService.find_one()
      .subscribe(
        (data:ITweet[]) => {
          this.tweets = data;
          this.filteredTweets = data;
          console.log(data);
          console.log('subscribed to observable')
        },
        (err: any) => console.log(err))
  }

  performFilter(filterValue:string): ITweet[] {
    return this.tweets.filter((tweet: ITweet) =>
      tweet.text.indexOf(filterValue) !== -1);
  }

  

  


}
