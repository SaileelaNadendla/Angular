import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts:any;
  responce:any;
  title = 'Http-app';



  constructor(private http:HttpClient){}
  getPost(){
    this.http.get("http://localhost:3000/posts/",{responseType:"json"}).subscribe(posts =>{
      this.posts=posts;
      //console.log(posts);
      
    })
  }
    postData(){
      this.http.post("http://localhost:3000/posts/", {title:"test-server", author:"sai"}).subscribe(res =>{
        this.responce= res;
      })
    }
    putData(){
      this.http.put("http://localhost:3000/posts/20",{title:"java", author:"leela"}).subscribe(res =>{
        this.responce=res;
      })
    }
    deleteData(){
      this.http.delete("http://localhost:3000/posts/6").subscribe(res =>{
        this.responce=res;
      })
    }
    patchData(){
      this.http.patch("http://localhost:3000/posts/10",{title:"leela"}).subscribe(res =>{
        this.responce=res;
      })
    }
    


  
  }



