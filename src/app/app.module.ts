import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetListService } from './tweet-list/tweet-list.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TweetListComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "tweets", component: TweetListComponent },
      { path: '**', redirectTo:"welcome", pathMatch: 'full'}
    ])
  ],
  providers: [TweetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
