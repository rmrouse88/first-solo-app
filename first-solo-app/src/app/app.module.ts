import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TweetListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "tweets", component: TweetListComponent },
      { path: '**', redirectTo:"welcome", pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
