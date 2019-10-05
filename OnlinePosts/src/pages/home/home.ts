import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostDetails } from '../postdetails/postdetails';
import { PostListService } from '../../app/post.list.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  postRes: any = [];
  counter: any;
  constructor(public navCtrl: NavController, private postlistservice: PostListService) { 
    this.getPosts();
    this.counter = 0;
  }

  getPosts() {
    this.postlistservice.getPostList().subscribe(data => {
      for(var i = 0; i < 10; i++) {
        this.postRes.push(data[i]);
        this.counter = 1;
      }
    });
  }

  goToPostDetails(title, desc, userid, pid) {
    this.navCtrl.push(PostDetails, {
      title: title,
      description: desc,
      id: userid,
      postid: pid
    });
  }

  doInfinite(infiniteScroll): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        this.postlistservice.getPostList().subscribe(data => {
          var start = (this.counter * 10) + 1;
          var end = start + 9;
          for(var i = start; i < end; i++) {
            this.postRes.push(data[i]);
            this.counter = 2;
          }
        });
        console.log('Async operation has ended');
        resolve();
        infiniteScroll.complete();
      },500);
    })
  }
}
