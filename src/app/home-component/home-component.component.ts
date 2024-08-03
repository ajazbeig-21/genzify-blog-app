// home-component.component.ts
import { Component } from '@angular/core';
import * as  Parse from 'parse';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {

  data: postData[] = [];

  async ngOnInit() {

    try {
      const query = new Parse.Query("Post");

      const post = await query.find();

      this.data = post;

    } catch (error) {
      console.log(error);
    }
    
  }
  
  // home-component.component.ts
async deletePost(id: string) {
  try {
    const Post = Parse.Object.extend("Post");
    const todo = new Post();
    todo.id = id;
    await todo.destroy();
    const newData = this.data.filter( (item: postData) => item.id !== id )
    this.data = newData;
  } catch (error) {
    console.log(error);
  }
}

}

interface postData {
  id: string,
  get: any,
} 