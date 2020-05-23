import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  post: Post;



  constructor(private postsService: PostsService, private router: Router) {
    this.post = new Post('', '', '', '', '', '');

  }

  ngOnInit(): void {

  }
  /**
   * Función ejecutada al pulsar el botón enviar del formulario. Se encarga de almacenar el post generado y, además, devuelve al usuario a la página principal del blog para poder ver la entrada, junto con todas las demás
   */
  onClickEnviar() {
    let imagen: string;
    switch (this.post.categoria) {
      case 'deportes':
        imagen = 'https://educationatw.com/wp-content/uploads/2017/11/SPORTS-ICON-300x300.png';
        break;
      case 'actualidad':
        imagen = 'https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170502477/77302211-papel-de-noticias-icono-aislado-dise%C3%B1o-de-ilustraci%C3%B3n-vectorial.jpg';
        break;
      case 'recetas':
        imagen = 'https://1.bp.blogspot.com/-dvPMDBaKUfA/Vow-xtFYdTI/AAAAAAAAHh8/lEDKD3ODiMg/s1600/icono%2Bgastronomia.png';
        break;
      case 'tecnologia':
        imagen = 'https://triaformacion.com/wp-content/uploads/2018/04/icono-tecnologia.jpg';
        break;
    }
    this.post.imagen = imagen;
    this.postsService.agregarPost(this.post);
    this.router.navigate(['/blog']);
  }

}
