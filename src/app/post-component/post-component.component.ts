// post-component.component.ts
import { Component } from '@angular/core';
import * as  Parse from 'parse';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent {

  data: postData = {
    title: '',
    body: '',
  }

  handleSubmit(){
    try {
      const Post = new Parse.Object("Post");
  
      Post.set("title", this.data.title);
      Post.set("body", this.data.body);
  
      Post.save().then(() => {
        console.log("New Post added successfully");
      });
    } catch (error) {
      console.log(error);
    }
  }

}

interface postData {
  title: string,
  body: string
}