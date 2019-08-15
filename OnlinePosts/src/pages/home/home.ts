import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PostDetails } from '../postdetails/postdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  postRes: any;
  postApiUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(this.postApiUrl).subscribe(data => {
      this.postRes = data;
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

  // goToPostDetails() {
  //   alert("in func");
  // }

}
