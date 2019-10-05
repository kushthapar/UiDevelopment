import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PostDetails } from '../pages/postdetails/postdetails';
import { HttpClientModule } from '@angular/common/http';
import { PostListService } from './post.list.service';
import { UserDetailsService } from './user.details.service';
import { PostDetailService } from './post.details.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostDetails
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostListService,
    UserDetailsService,
    PostDetailService
  ],
})
export class AppModule {}
