import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];

  constructor() { }

  agregarPost(post:Post){

  }
  getAllPosts(){
  /* Recuperar los posts con una promesa*/
  }
  getPostsByCategoria(cat:string){
    /* Recuperar los post de una categoria concreta, con promesa */
  }

}
