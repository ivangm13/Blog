import { Post } from '../models/post.model'
export const POSTS:Post[] = [
    {
        titulo: 'Titulo 1',
        texto: 'Este es el post de prueba número 1. Es de la categoría deportes',
        autor: 'Iván García',
        imagen: 'https://educationatw.com/wp-content/uploads/2017/11/SPORTS-ICON-300x300.png',
        fecha: '17/05-2020',
        categoria: 'deportes'
    },
    {
        titulo: 'Titulo 2',
        texto: 'Post de prueba numero 2. Pertenece a la categoria tecnologia',
        autor: 'Ivan García',
        imagen: 'https://triaformacion.com/wp-content/uploads/2018/04/icono-tecnologia.jpg',
        fecha: '17/05/2020',
        categoria: ' tecnologia'
    },
    {
        titulo: 'Titulo 3',
        texto: 'Este es el post numero 3, perteneciente a la categoría actualidad. ',
        autor: 'Iván García',
        imagen: 'https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170502477/77302211-papel-de-noticias-icono-aislado-dise%C3%B1o-de-ilustraci%C3%B3n-vectorial.jpg',
        fecha: '17/05-2020',
        categoria: 'actualidad'
    },
    {
        titulo: 'Titulo 4',
        texto: 'Post numero 4. Otro post de prueba. Categoría recetas',
        autor: 'Iván García',
        imagen: 'https://1.bp.blogspot.com/-dvPMDBaKUfA/Vow-xtFYdTI/AAAAAAAAHh8/lEDKD3ODiMg/s1600/icono%2Bgastronomia.png',
        fecha: '17/05/2020',
        categoria: 'recetas'
    },
]