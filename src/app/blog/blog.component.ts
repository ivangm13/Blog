import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrPosts: Post[];

  constructor(private postsService: PostsService, private router: Router) {

  }

  async  ngOnInit() {
    this.arrPosts = await this.postsService.getAllPosts();
  }

  /**
   * Filtra los post presentes por la categoría elegida por el usuario
   */
  async filtrarCategoria($event) {
    this.arrPosts = await this.postsService.getPostsByCategoria($event.target.value)
  }
  /**
   * Envía al usuario a la sección para crear una entrada del blog
   */
  goToNew() {
    this.router.navigate(['/new']);
  }

}
