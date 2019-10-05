import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
})

export class PostDetailService {
    postDetailsUrl = "https://jsonplaceholder.typicode.com/posts/";
    postid: any;

    constructor(private http: HttpClient) {
    }

    getPostDetail() {
        this.postDetailsUrl = this.postDetailsUrl + this.postid + "/comments";
        return this.http.get(this.postDetailsUrl);
    }  
}