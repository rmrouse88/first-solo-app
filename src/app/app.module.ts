import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetListService } from './core/tweet-list.service';
import { SingleTweetComponent } from './single-tweet/single-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TweetListComponent,
    SingleTweetComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "tweets", component: TweetListComponent },
      { path: "find-one", component: SingleTweetComponent },
      { path: '**', redirectTo:"welcome", pathMatch: 'full'}
    ])
  ],
  providers: [TweetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
