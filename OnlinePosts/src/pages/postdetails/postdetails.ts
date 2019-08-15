import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-postdetails',
  templateUrl: 'postdetails.html'
})
export class PostDetails implements OnInit {

  title: any;
  desc: any;
  userid: any;
  postid: any;

  userRes: any;
  postDetailRes: any;
  count = 0;
  userDetailsUrl = "https://jsonplaceholder.typicode.com/users/";
  postDetailsUrl = "https://jsonplaceholder.typicode.com/posts/";

  constructor(public navCtrl: NavController, private http: HttpClient, private navParams: NavParams) {
    this.title = navParams.get('title');
    this.desc = navParams.get('description');
    this.userid = navParams.get('id');
    this.postid = navParams.get('postid');
    
    console.log(this.postid);
  }

  ngOnInit() {
    this.userDetailsUrl = this.userDetailsUrl + this.userid
    this.postDetailsUrl = this.postDetailsUrl + this.postid + "/comments";
    
    this.http.get(this.userDetailsUrl).subscribe(data => {
      this.userRes = data;
    });

    this.http.get(this.postDetailsUrl).subscribe(data => {
      this.postDetailRes = data;

      for(var i = 0; i < this.postDetailRes.length; i++) {
        if(this.postDetailRes[i].postId == this.postid)
          // console.log(this.postDetailRes[i].postId + "/" + this.postid)
          this.count++;
      }
    });
  }
}
