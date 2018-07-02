import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetListService } from './core/tweet-list.service';
import { SingleTweetComponent } from './single-tweet/single-tweet.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FloatingSidebarComponent } from './floating-sidebar/floating-sidebar.component';
import { OcticonDirective } from './core/octicon.directive';
import { TweetStyleDirective } from './tweet-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TweetListComponent,
    SingleTweetComponent,
    ProjectDetailComponent,
    FloatingSidebarComponent,
    OcticonDirective,
    TweetStyleDirective
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "tweets", component: TweetListComponent },
      { path: "find-one", component: SingleTweetComponent },
      { path: "implementation", component: ProjectDetailComponent},
      { path: '**', redirectTo:"welcome", pathMatch: 'full'}
    ]),
  ],
  providers: [TweetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
