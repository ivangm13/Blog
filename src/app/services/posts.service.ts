import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { POSTS } from '../db/post.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];

  constructor() { 
    this.posts =  POSTS;
      
    
  }

  agregarPost(post: Post) {
    /* Agregar un post desde el formulario */

    this.posts.push(post);
    console.log(this.posts);
  }
  getAllPosts():Promise<Post[]> {
    
    /* Recuperar los posts con una promesa*/
    return new Promise ((resolve,reject)=>{
      resolve(this.posts);
    });
    
  }
  getPostsByCategoria(cat: string):Promise<Post[]> {
    /* Recuperar los post de una categoria concreta, con promesa */
    return new Promise ((resolve,reject)=>{
      let postPorCategoria = new Array<Post>();
      for(let post of this.posts){
        if(cat===''){
          postPorCategoria = this.posts;
        }else if(post.categoria===cat){
          postPorCategoria.push(post);
        }
      }
      resolve(postPorCategoria);
    })
  }

}
