import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HttpError';
  posts:any;
  response:any;

  constructor(private http: HttpClient){}

  getPosts(){
    this.http.get("http://localhost:3000/posts/",{responseType:"json"}).subscribe(posts => {
     this.posts = posts;
  
    })
  }
  postData(){
    this.http.post("http://localhost:3000/posts/",{title:"json",author:"vidya"}).subscribe(res => {
      this.response = res;
    })
  }
    putData(){
    this.http.put("http://localhost:3000/posts/3",{title:"java",author:"sahithi"}).subscribe(res => {
      this.response = res;
    })
  }  
  deleteData() {
    this.http.delete("http://localhost:3000/posts/4").subscribe(res => {
      this.response = res;
    })
  }
}
