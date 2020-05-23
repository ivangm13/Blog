import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { POSTS } from '../db/post.db';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];

  constructor() {
    this.posts = POSTS;
  }

  /**
   *  Permite añadir el post generado en el formulario al conjunto de posts.
   * 
   * @param post -->Post generado desde el formulario
   */
  agregarPost(post: Post) {
    this.posts.push(post);
  }

  /**
   * 
   * Recupera el conjunto de post a través de una promesa
   */
  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => resolve(this.posts));
  }

  /**
   * Permite filtrar los post por categoría utilizando el método de arrays filter
   * @param cat --> Categoría que se quiere filtrar
   */
  getPostsByCategoria(cat: string): Promise<Post[]> {
    let postPorCategoria = [];
    return new Promise((resolve, reject) => {
      if (cat === '') {
        postPorCategoria = this.posts;
      } else {
        postPorCategoria = this.posts.filter((post) => {
          return post.categoria === cat;
        })
      }
      resolve(postPorCategoria);
    })
  }
}
