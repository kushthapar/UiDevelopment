import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
})

export class PostListService {
    postApiUrl = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: HttpClient) {
    }

    getPostList() {
        return this.http.get(this.postApiUrl);
    }  
}