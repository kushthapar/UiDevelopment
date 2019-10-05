import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserDetailsService } from '../../app/user.details.service';
import { PostDetailService } from '../../app/post.details.service';

@Component({
  selector: 'page-postdetails',
  templateUrl: 'postdetails.html'
})
export class PostDetails {

  title: any;
  desc: any;
  userid: any;
  postid: any;

  userRes: any;
  postDetailRes: any;
  count = 1;

  constructor(public navCtrl: NavController, private http: HttpClient, private navParams: NavParams,
     private userdetailservice: UserDetailsService, private postdetailservice: PostDetailService) {
    this.title = navParams.get('title');
    this.desc = navParams.get('description');
    this.userid = navParams.get('id');
    this.postid = navParams.get('postid');
    
    this.userdetailservice.userid = this.userid;
    this.postdetailservice.postid = this.postid;

    this.getUserDetails();
    this.getPostDetails();
  }

  getUserDetails() {
    this.userdetailservice.getUserDetails().subscribe(data => {
      this.userRes = data;
    });
  }

  getPostDetails() {
    this.postdetailservice.getPostDetail().subscribe(data => {
      this.postDetailRes = data;

      for(var i = 0; i < this.postDetailRes.length; i++) {
        if(this.postDetailRes[i].postId == this.postid)
          this.count++;
      }
    });
  } 
}
