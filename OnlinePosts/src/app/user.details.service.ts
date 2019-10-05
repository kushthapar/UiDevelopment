import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
})

export class UserDetailsService {
    userDetailsUrl = "https://jsonplaceholder.typicode.com/users/";
    userid: any;
    
    constructor(private http: HttpClient) {
    }

    getUserDetails() {
        this.userDetailsUrl = this.userDetailsUrl + this.userid
        return this.http.get(this.userDetailsUrl);
    }  
}